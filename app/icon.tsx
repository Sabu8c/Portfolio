import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#050505",
                    borderRadius: "6px",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "18px",
                        height: "18px",
                        border: "2.5px solid #FF4D00",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "2.5px",
                            background: "#FF4D00",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            width: "2.5px",
                            height: "100%",
                            background: "#FF4D00",
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
