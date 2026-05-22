import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth || 300;
    let height = canvas.offsetHeight || 300;

    // Set canvas resolution for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate points on a unit sphere (radius = 1)
    const points: Point3D[] = [];
    const rings = 35; // latitude rings

    for (let i = 0; i < rings; i++) {
      const theta = (i / (rings - 1)) * Math.PI - Math.PI / 2; // -pi/2 to pi/2
      const ringRadius = Math.cos(theta);
      const y = Math.sin(theta);
      
      // Number of points on this ring depends on circumference
      const pointsCount = Math.max(8, Math.round(ringRadius * 45));
      
      for (let j = 0; j < pointsCount; j++) {
        const phi = (j / pointsCount) * Math.PI * 2;
        const x = ringRadius * Math.cos(phi);
        const z = ringRadius * Math.sin(phi);
        points.push({ x, y, z });
      }
    }

    // Rotation angles
    let angleX = 0.001;
    let angleY = 0.002;

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - width / 2;
      const clientY = e.clientY - rect.top - height / 2;
      mouseRef.current.targetX = clientX * 0.005;
      mouseRef.current.targetY = clientY * 0.005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth || 300;
      height = width; // Keep it square
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const currentAngleX = angleX + mouseRef.current.y * 0.05;
      const currentAngleY = angleY + mouseRef.current.x * 0.05;

      // Base rotation increment
      angleY += 0.003;
      angleX += 0.001;

      // Calculate current radius based on actual canvas size
      const currentRadius = Math.min(width, height) * 0.38;
      const fov = 400;
      const cameraDist = currentRadius * 2.2;
      const cx = width / 2;
      const cy = height / 2;

      // Rotate and project points
      const projected = points.map((p) => {
        // Scale unit sphere point to actual radius
        const px = p.x * currentRadius;
        const py = p.y * currentRadius;
        const pz = p.z * currentRadius;

        // Rotate around Y axis
        let x1 = px * Math.cos(currentAngleY) - pz * Math.sin(currentAngleY);
        let z1 = px * Math.sin(currentAngleY) + pz * Math.cos(currentAngleY);
        
        // Rotate around X axis
        let y2 = py * Math.cos(currentAngleX) - z1 * Math.sin(currentAngleX);
        let z2 = py * Math.sin(currentAngleX) + z1 * Math.cos(currentAngleX);

        // Perspective projection
        const scale = fov / (fov + z2 + cameraDist);
        const projX = cx + x1 * scale * 1.5;
        const projY = cy + y2 * scale * 1.5;

        return { x: projX, y: projY, z: z2, scale };
      });

      // Sort by Z depth (painter's algorithm)
      projected.sort((a, b) => b.z - a.z);

      // Draw points
      projected.forEach((p) => {
        // Calculate opacity based on depth (z ranges from -currentRadius to +currentRadius)
        const maxDepth = currentRadius;
        const relativeZ = (p.z + maxDepth) / (2 * maxDepth); // 0 to 1
        const opacity = 0.15 + (1 - relativeZ) * 0.85; // 0.15 to 1.0

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
        
        // Draw point
        ctx.beginPath();
        const size = Math.max(0.5, p.scale * 1.6);
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full aspect-square pointer-events-none"
      />
    </div>
  );
}
