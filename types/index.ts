export interface WorkItem {
  title: string
  desc: string
}

export interface SeoMeta {
  title: string
  description: string
  ogImage?: string
  twitterCard?: string
}

export interface ParticlesOptions {
  particles: {
    color: {
      value: string
    }
    links: {
      color: string
      enable: boolean
    }
    move: {
      enable: boolean
      speed: number
    }
    number: {
      value: number
    }
    size?: {
      value: number
    }
    opacity?: {
      value: number
    }
  }
  fpsLimit?: number
  interactivity?: {
    events?: {
      onHover?: {
        enable: boolean
        mode: string
      }
    }
  }
}
