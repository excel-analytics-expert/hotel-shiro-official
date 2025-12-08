"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import DynamicImage from "@/components/dynamic-image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const LS_KEY = "about.mainImage"

export default function AboutSection() {
  const [overrideSrc, setOverrideSrc] = useState<string | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const fileRef = useRef<HTMLInputElement | null>(null)

  // Load saved override (if any)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY)
      if (saved) setOverrideSrc(saved)
    } catch {}
  }, [])

  // Enable edit mode via ?edit=1
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    setIsEdit(params.get("edit") === "1")
  }, [])

  const src = useMemo(() => {
    return overrideSrc || "/images/exterior.jpg"
  }, [overrideSrc])

  const onPickFile = () => fileRef.current?.click()

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    try {
      const reader = new FileReader()
      reader.onload = () => {
        const dataUrl = String(reader.result)
        setOverrideSrc(dataUrl)
        try {
          localStorage.setItem(LS_KEY, dataUrl)
        } catch {}
      }
      reader.readAsDataURL(f)
    } catch {
      // ignore
    } finally {
      // reset input to allow selecting the same file again later
      if (fileRef.current) fileRef.current.value = ""
    }
  }

  const resetImage = () => {
    try {
      localStorage.removeItem(LS_KEY)
    } catch {}
    setOverrideSrc(null)
  }

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">ホテルシローについて</h2>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-xl leading-relaxed text-gray-700">
              船橋にある全42室のアットホームなビジネスホテルです ✨
            </div>

            <div className="grid gap-8 text-lg text-gray-600 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">🚃 アクセス抜群</h3>
                <p className="leading-relaxed">
                  JR船橋駅南口から徒歩7分
                  <br />
                  京成船橋駅から徒歩5分
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">🎢 周辺スポット</h3>
                <p className="leading-relaxed">
                  舞浜エリア 当ホテルより13.4㎞
                  <br />
                  幕張メッセ 当ホテルより9㎞
                  <br />
                  LaLa arena TOKYO-BAY 当ホテルより2㎞
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          {/* 画像（差し替え対応） */}
          <div className="group relative">
            <AspectRatio ratio={3 / 2} className="overflow-hidden rounded-lg shadow-lg">
              <DynamicImage
                src={src}
                alt="ホテルシロー フロントデスク（外観・ロビー）"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </AspectRatio>

            {/* 編集オーバーレイ（?edit=1 のときだけ表示） */}
            {isEdit && (
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10">
                <div className="pointer-events-auto absolute right-2 top-2 flex gap-2">
                  <button
                    type="button"
                    onClick={onPickFile}
                    className="rounded bg-black/70 px-3 py-1 text-xs font-medium text-white hover:bg-black/80"
                    title="この画像を差し替える"
                  >
                    画像差し替え
                  </button>
                  {overrideSrc && (
                    <button
                      type="button"
                      onClick={resetImage}
                      className="rounded bg-white/80 px-3 py-1 text-xs font-medium text-gray-900 hover:bg-white"
                      title="元の画像に戻す"
                    >
                      元に戻す
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 非表示のファイル入力 */}
            <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />
          </div>

          {/* テキスト */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">心地よい空間でお迎えします</h3>
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                2024年にリニューアルした快適なお部屋や2025年にロビー・フロントをリニューアル致しました。
                心地よい空間のご提供や経験豊かなスタッフがお客様をサポートします。
              </p>

              <p>ビジネスでも観光でも理想的な拠点としてご利用ください。</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-md rounded-lg bg-yellow-50 p-6 text-center">
          <h4 className="mb-2 text-xl font-bold text-gray-900">お客様からの評価</h4>
          <div className="mb-2 flex items-center justify-center">
            <span className="text-3xl font-bold text-yellow-600">3.9</span>
            <div className="ml-3">
              <div className="text-xl text-yellow-400">{String.fromCharCode(9733).repeat(4) + "☆"}</div>
              <p className="text-sm text-gray-600">Google評価 (182件)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
