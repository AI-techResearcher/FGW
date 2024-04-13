import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  TwitterIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CiShare2 } from 'react-icons/ci'

export default function Share() {
  const currentPageUrl = window.location.href

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <CiShare2 className='w-6 h-auto hover:scale-95' />
          </button>
        </DialogTrigger>
        <DialogContent className='bg-slate-800 text-gray-200 border-slate-600'>
          <DialogHeader>
            <DialogTitle className='text-gray-300'>
              Share to social media
            </DialogTitle>
          </DialogHeader>
          <div className='flex gap-3 flex-wrap'>
            {/* Pass the URL to each share button */}
            <EmailShareButton url={currentPageUrl}>
              <EmailIcon className='w-10 h-auto' />
            </EmailShareButton>
            <FacebookShareButton url={currentPageUrl}>
              <FacebookIcon className='w-10 h-auto' />
            </FacebookShareButton>
            <LinkedinShareButton url={currentPageUrl}>
              <LinkedinIcon className='w-10 h-auto' />
            </LinkedinShareButton>
            <RedditShareButton url={currentPageUrl}>
              <RedditIcon className='w-10 h-auto' />
            </RedditShareButton>
            <TelegramShareButton url={currentPageUrl}>
              <TelegramIcon className='w-10 h-auto' />
            </TelegramShareButton>
            <TumblrShareButton url={currentPageUrl}>
              <TumblrIcon className='w-10 h-auto' />
            </TumblrShareButton>
            <TwitterShareButton url={currentPageUrl}>
              <TwitterIcon className='w-10 h-auto' />
            </TwitterShareButton>
            <WhatsappShareButton url={currentPageUrl}>
              <WhatsappIcon className='w-10 h-auto' />
            </WhatsappShareButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
