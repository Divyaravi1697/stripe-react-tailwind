import React, { useEffect, useRef } from "react";

interface BoxProps {
  type: "climate" | "issuing" | "capital" | "treasury" | "shared";
  top: number;
  left: number;
  label: string;
  active: boolean;
  highlight: boolean;
}

const Box: React.FC<BoxProps> = ({
  type,
  top,
  left,
  label,
  active,
  highlight,
}) => {
  const getIcon = () => {
    switch (type) {
      case "issuing":
        return (
          <svg
            width="50"
            height="50"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
              fill="url(#product-icon-connect-Sticky-a)"
            ></path>
            <path
              d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
              fill="#0073E6"
            ></path>
            <path
              d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
              fill="url(#product-icon-connect-Sticky-b)"
            ></path>
            <defs>
              <linearGradient
                id="product-icon-connect-Sticky-a"
                x1="13"
                y1="1.71"
                x2="13"
                y2="15.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#11EFE3"></stop>
                <stop offset=".33" stopColor="#15E8E2"></stop>
                <stop offset=".74" stopColor="#1FD3E0"></stop>
                <stop offset="1" stopColor="#21CFE0"></stop>
              </linearGradient>
              <linearGradient
                id="product-icon-connect-Sticky-b"
                x1="20"
                y1="15.72"
                x2="20"
                y2="27.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00299C"></stop>
                <stop offset="1" stopColor="#0073E6"></stop>
              </linearGradient>
            </defs>
          </svg>
        );
      case "shared":
        return (
          <svg
            width="50"
            height="50"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1C10.5066 1 2 9.50659 2 20C2 30.4934 10.5066 39 21 39C31.4934 39 40 30.4934 40 20C40 9.50659 31.4934 1 21 1Z"
              stroke="#C4CCD8"
            />
            <path
              d="M21 15C17.6863 15 15 17.6863 15 21C15 24.3137 17.6863 27 21 27C24.3137 27 27 24.3137 27 21C27 17.6863 24.3137 15 21 15Z"
              stroke="#C4CCD8"
            />
          </svg>
        );
      default:
        return (
          <svg
            width="50"
            height="50"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 3.46479C27 2.10352 25.8941 1 24.53 1H3.47002C2.10586 1 1 2.10352 1 3.46479V33.5352C1 34.3696 1.42306 35.1474 2.12421 35.602C2.82536 36.0566 3.7094 36.1264 4.47346 35.7874L14.6623 31.2645L25.5334 26.4336C26.4253 26.0379 27 25.1553 27 24.1814V12.2887V3.46479Z"
              stroke="#C4CCD8"
            />
            <path
              d="M27.5 40C34.9558 40 41 33.9558 41 26.5C41 19.0442 34.9558 13 27.5 13C20.0442 13 14 19.0442 14 26.5C14 33.9558 20.0442 40 27.5 40Z"
              stroke="#C4CCD8"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`box ${type} ${active ? "active" : ""} ${
        highlight ? "highlight" : ""
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="icon-wrapper">
        <div className="icon-default">{getIcon()}</div>
        <div className="icon-hover"></div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

const FlowDiagram: React.FC = () => {
  const [animationState, setAnimationState] = React.useState({
    boxes: [
      { type: "climate", active: false, highlight: false },
      { type: "issuing", active: false, highlight: false },
      { type: "capital", active: false, highlight: false },
      { type: "treasury", active: false, highlight: false },
      { type: "shared", active: false, highlight: false },
    ],
    lines: [false, false, false, false],
  });

  const animationRef = useRef<number>();

  useEffect(() => {
    const startAnimation = () => {
      // Reset all elements
      setAnimationState({
        boxes: [
          { type: "climate", active: false, highlight: false },
          { type: "issuing", active: false, highlight: false },
          { type: "capital", active: false, highlight: false },
          { type: "treasury", active: false, highlight: false },
          { type: "shared", active: false, highlight: false },
        ],
        lines: [false, false, false, false],
      });

      // Animate boxes in sequence
      animationRef.current = window.setTimeout(() => {
        setAnimationState((prev) => ({
          ...prev,
          boxes: prev.boxes.map((box, i) =>
            i === 0 ? { ...box, active: true } : box
          ),
        }));

        animationRef.current = window.setTimeout(() => {
          setAnimationState((prev) => ({
            ...prev,
            boxes: prev.boxes.map((box, i) =>
              i === 0 ? { ...box, highlight: true } : box
            ),
          }));

          animationRef.current = window.setTimeout(() => {
            setAnimationState((prev) => ({
              boxes: prev.boxes.map((box, i) =>
                i === 0 ? { ...box, highlight: false } : box
              ),
              lines: prev.lines.map((line, i) => (i === 0 ? true : line)),
            }));

            // Continue with the rest of the boxes...
            const sequence = [
              { boxIndex: 1, lineIndex: 1 },
              { boxIndex: 2, lineIndex: 2 },
              { boxIndex: 3, lineIndex: 3 },
            ];

            let delay = 1000;
            sequence.forEach(({ boxIndex, lineIndex }) => {
              animationRef.current = window.setTimeout(() => {
                setAnimationState((prev) => ({
                  ...prev,
                  boxes: prev.boxes.map((box, i) =>
                    i === boxIndex ? { ...box, active: true } : box
                  ),
                }));

                animationRef.current = window.setTimeout(() => {
                  setAnimationState((prev) => ({
                    ...prev,
                    boxes: prev.boxes.map((box, i) =>
                      i === boxIndex ? { ...box, highlight: true } : box
                    ),
                  }));

                  animationRef.current = window.setTimeout(() => {
                    setAnimationState((prev) => ({
                      boxes: prev.boxes.map((box, i) =>
                        i === boxIndex ? { ...box, highlight: false } : box
                      ),
                      lines: prev.lines.map((line, i) =>
                        i === lineIndex ? true : line
                      ),
                    }));
                  }, 500);
                }, 500);
              }, delay);
              delay += 1500;
            });

            // Final shared box
            animationRef.current = window.setTimeout(() => {
              setAnimationState((prev) => ({
                ...prev,
                boxes: prev.boxes.map((box, i) =>
                  i === 4 ? { ...box, active: true } : box
                ),
              }));

              animationRef.current = window.setTimeout(() => {
                setAnimationState((prev) => ({
                  ...prev,
                  boxes: prev.boxes.map((box, i) =>
                    i === 4 ? { ...box, highlight: true } : box
                  ),
                }));

                animationRef.current = window.setTimeout(() => {
                  setAnimationState((prev) => ({
                    boxes: prev.boxes.map((box, i) =>
                      i === 4 ? { ...box, highlight: false } : box
                    ),
                    lines: [...prev.lines],
                  }));

                  // Restart animation
                  animationRef.current = window.setTimeout(
                    startAnimation,
                    2000
                  );
                }, 500);
              }, 500);
            }, delay);
          }, 500);
        }, 500);
      }, 0);

      return () => {
        if (animationRef.current) {
          window.clearTimeout(animationRef.current);
        }
      };
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        window.clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="diagram-container">
      {/* SVG for gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#9b5de5", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00bbf9", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#00f5d4", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9b5de5", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#00f5d4", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff4d6d", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8e9eab" }} />
            <stop offset="100%" style={{ stopColor: "#eef2f3" }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Connections */}
      <svg className="connections">
        <path
          d="M 150 100 C 200 150, 200 250, 300 300"
          className={`line line1 ${animationState.lines[0] ? "animate" : ""}`}
        />
        <path
          d="M 300 300 C 350 350, 350 200, 400 200"
          className={`line line2 ${animationState.lines[1] ? "animate" : ""}`}
        />
        <path
          d="M 300 300 C 350 320, 350 450, 400 450"
          className={`line line3 ${animationState.lines[2] ? "animate" : ""}`}
        />
        <path
          d="M 400 200 C 450 200, 450 250, 500 250"
          className={`line line4 ${animationState.lines[3] ? "animate" : ""}`}
        />
      </svg>

      {/* Boxes */}
      <Box
        type="climate"
        top={50}
        left={100}
        label="Climate"
        active={animationState.boxes[0].active}
        highlight={animationState.boxes[0].highlight}
      />
      <Box
        type="issuing"
        top={250}
        left={250}
        label="Issuing"
        active={animationState.boxes[1].active}
        highlight={animationState.boxes[1].highlight}
      />
      <Box
        type="capital"
        top={150}
        left={350}
        label="Capital"
        active={animationState.boxes[2].active}
        highlight={animationState.boxes[2].highlight}
      />
      <Box
        type="treasury"
        top={400}
        left={350}
        label="Treasury"
        active={animationState.boxes[3].active}
        highlight={animationState.boxes[3].highlight}
      />
      <Box
        type="shared"
        top={250}
        left={500}
        label="Shared"
        active={animationState.boxes[4].active}
        highlight={animationState.boxes[4].highlight}
      />
    </div>
  );
};

export default FlowDiagram;
