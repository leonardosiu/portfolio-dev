export default function FontPreview() {
    return (
      <section className="space-y-8 p-8">
        <h1 className="text-4xl font-semibold mb-8">Font Testing</h1>
        
        {/* Primary Font - Space Grotesk */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase text-muted mb-2">Primary: Space Grotesk</h2>
          <p className="text-2xl" style={{ fontFamily: 'var(--font-primary)' }}>
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg" style={{ fontFamily: 'var(--font-primary)' }}>
            Regular text: 0123456789 !@#$%^&*()
          </p>
        </div>

        {/* Mono Font - Cascadia Code */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase text-muted mb-2">Mono: Cascadia Code</h2>
          <code className="text-2xl block" style={{ fontFamily: 'var(--font-mono)' }}>
            const hello = "world";
          </code>
          <code className="text-lg block" style={{ fontFamily: 'var(--font-mono)' }}>
            function test() {'{'} return true; {'}'}
          </code>
        </div>

        {/* Accent Font - VT323 */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase text-muted mb-2">Accent: VT323</h2>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-accent-vt323)' }}>
            VT323: Retro Terminal Style
          </p>
        </div>

        {/* Accent Font - Pixelify Sans */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase text-muted mb-2">Accent: Pixelify Sans</h2>
          <p className="text-3xl" style={{ fontFamily: 'var(--font-accent-pixelify)' }}>
            Pixelify Sans: Modern Pixel Art
          </p>
        </div>

        {/* Accent Font - Press Start 2P */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase text-muted mb-2">Accent: Press Start 2P</h2>
          <p className="text-2xl" style={{ fontFamily: 'var(--font-accent-press)' }}>
            PRESS START 2P
          </p>
          <p className="text-lg" style={{ fontFamily: 'var(--font-accent-press)' }}>
            Classic 8-bit gaming font
          </p>
        </div>
      </section>
    );
  }
  