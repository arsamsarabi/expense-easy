export const PRIVATE_ROUTES = {
  profile: '/profile',
} as const

export const PUBLIC_ROUTES = {
  home: '/',
}

export const ROUTES = {
  ...PRIVATE_ROUTES,
  ...PUBLIC_ROUTES,
}
