import BOA from "../assets/BOA.jpg"
import bir from "../assets/bir.png"
import slack from "../assets/slack.png"
import meundies from "../assets/meundies.png"
import woocommerce from "../assets/woocommerce.png"

const ClientLogos = () => {
  const logos = [BOA, bir, slack, meundies, woocommerce];

  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "56px 0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 22s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 32px;
          padding: 16px 28px;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 0, 153, 0.08);
          box-shadow: 0 2px 12px rgba(0, 0, 153, 0.05);
          transition: all 0.3s ease;
          flex-shrink: 0;
          cursor: default;
        }

        .logo-item:hover {
          background: rgba(255,255,255,0.95);
          border-color: rgba(0, 0, 153, 0.2);
          box-shadow: 0 8px 28px rgba(0, 0, 153, 0.1);
          transform: translateY(-3px);
        }

        .logo-item img {
          height: 36px;
          width: 120px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.55);
          transition: filter 0.3s ease;
        }

        .logo-item:hover img {
          filter: grayscale(0%) opacity(1);
        }

        .fade-left {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 180px;
          background: linear-gradient(to right, #EAF2FA 0%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }

        .fade-right {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 180px;
          background: linear-gradient(to left, #EAF2FA 0%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      {/* Header */}
      <div style={{
        textAlign: "center",
        marginBottom: 36,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 10,
        }}>
          <div style={{
            width: 32, height: 2,
            background: "linear-gradient(90deg, transparent, #000099)",
            borderRadius: 99,
          }} />
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#000099",
          }}>
            Firm Accreditation
          </span>
          <div style={{
            width: 32, height: 2,
            background: "linear-gradient(90deg, #000099, transparent)",
            borderRadius: 99,
          }} />
        </div>

        <p style={{
          fontSize: 13,
          color: "#94a3b8",
          fontWeight: 400,
          letterSpacing: "0.03em",
        }}>
          Trusted and recognized by leading institutions
        </p>
      </div>

      {/* Marquee */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="fade-left" />
        <div className="fade-right" />

        <div className="marquee-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt="accreditation logo" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle rule */}
      <div style={{
        marginTop: 44,
        height: 1,
        maxWidth: 900,
        margin: "44px auto 0",
        background: "linear-gradient(90deg, transparent, rgba(0,0,153,0.1), transparent)",
      }} />
    </section>
  );
};

export default ClientLogos;