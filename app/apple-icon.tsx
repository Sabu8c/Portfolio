import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
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
                    borderRadius: "20%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "80px",
                        height: "80px",
                        border: "8px solid #FF4D00",
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
                            height: "8px",
                            background: "#FF4D00",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            width: "8px",
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
