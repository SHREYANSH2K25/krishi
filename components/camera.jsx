"use client"

import { useRef, useState } from "react"
import { Camera } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CameraScanner() {
  const [isCapturing, setIsCapturing] = useState(false)
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const router = useRouter()

  const handleOpenCamera = async () => {
    try {
      setIsCapturing(true)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      streamRef.current = stream
      videoRef.current.srcObject = stream
      await videoRef.current.play()
    } catch (err) {
      console.error("Camera access error:", err)
      setIsCapturing(false)
    }
  }

  const handleCapture = () => {
    const canvas = document.createElement("canvas")
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0)

    const imageData = canvas.toDataURL("image/jpeg")

    // stop camera
    streamRef.current?.getTracks().forEach(track => track.stop())

    sessionStorage.setItem("capturedImage", imageData)
    router.push("/ai-chatbot")
  }

  return (
    <div>
      {/* Camera preview overlay */}
      {isCapturing && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          <button
            onClick={handleCapture}
            className="absolute bottom-8 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Capture
          </button>
        </div>
      )}

      {/* Floating camera icon */}
      {!isCapturing && (
        <button
          onClick={handleOpenCamera}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition z-50"
          aria-label="Open camera scanner"
        >
          <Camera className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
