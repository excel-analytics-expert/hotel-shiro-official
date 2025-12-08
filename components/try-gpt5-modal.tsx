"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio" // Maintains the 16:9 media area [^2]

type TryGpt5ModalProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  tryLabel?: string
  dismissLabel?: string
  tryHref?: string
}

export function TryGpt5Modal({
  open = false,
  onOpenChange = () => {},
  title = "ホテルシロー公式サイト",
  description = "千葉県船橋市のビジネスホテルシロー公式サイトです。東京ディズニーリゾートへのアクセス良好で、快適な客室と充実したアメニティをご提供いたします。",
  tryLabel = "公式サイトを見る",
  dismissLabel = "閉じる",
  tryHref = "https://hotel-shiro-official.com",
}: TryGpt5ModalProps) {
  const handleTry = () => {
    // Simulate redirect to a product page.
    if (typeof window !== "undefined") {
      window.open(tryHref, "_blank", "noopener,noreferrer")
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        // Rounded, shadowed card-like content with no internal padding to match screenshot.
        className="max-w-[560px] w-[92vw] overflow-hidden rounded-xl p-0"
      >
        {/* Top media area (16:9) */}
        <AspectRatio ratio={16 / 9}>
          <div className="h-full w-full bg-black" aria-label="Promotional media" />
        </AspectRatio>

        {/* Bottom content area */}
        <div className="space-y-3 bg-white p-5">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-base font-semibold text-zinc-900">{title}</DialogTitle>
            <DialogDescription className="text-sm text-zinc-600">{description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex items-center justify-end gap-2">
            <Button
              variant="outline"
              className="border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
              onClick={() => onOpenChange(false)}
            >
              {dismissLabel}
              <span className="sr-only">{"Dismiss promotion"}</span>
            </Button>
            <Button className="bg-black text-white hover:bg-black/90" onClick={handleTry}>
              {tryLabel}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
