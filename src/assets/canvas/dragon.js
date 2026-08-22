// src/assets/drawPixelDragon.js
export const dragon = (canvas, frame) => {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = 3;
  const breath = Math.sin(frame * 0.08) * 1.5; // Breathing motion

  // Wings (spilling upward)
  ctx.fillStyle = "#15803d"; // Dark green wing fold
  ctx.fillRect(4 * scale, (2 + breath) * scale, 12 * scale, 8 * scale);
  ctx.fillRect(28 * scale, (2 + breath) * scale, 12 * scale, 8 * scale);

  ctx.fillStyle = "#22c55e"; // Bright green wings
  ctx.fillRect(6 * scale, (4 + breath) * scale, 8 * scale, 6 * scale);
  ctx.fillRect(30 * scale, (4 + breath) * scale, 8 * scale, 6 * scale);

  // Body & Head (perched in middle)
  ctx.fillStyle = "#16a34a";
  ctx.fillRect(16 * scale, (8 + breath) * scale, 12 * scale, 10 * scale); // Head
  ctx.fillRect(14 * scale, (14 + breath) * scale, 16 * scale, 8 * scale);  // Chest

  // Glowing Dragon Eyes
  ctx.fillStyle = "#facc15";
  ctx.fillRect(18 * scale, (11 + breath) * scale, 2 * scale, 3 * scale);
  ctx.fillRect(24 * scale, (11 + breath) * scale, 2 * scale, 3 * scale);

  // Claws draped OVER the top border
  ctx.fillStyle = "#e2e8f0";
  ctx.fillRect(14 * scale, 20 * scale, 2 * scale, 4 * scale);
  ctx.fillRect(28 * scale, 20 * scale, 2 * scale, 4 * scale);

  // Periodic smoke / flame puff
  if (Math.floor(frame / 20) % 2 === 0) {
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(21 * scale, (15 + breath) * scale, 2 * scale, 2 * scale);
  }
};