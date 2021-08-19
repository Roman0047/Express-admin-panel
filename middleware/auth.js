export default function ({ app, redirect }) {
  if (!app.$auth.user) {
    return redirect('/')
  }
}
