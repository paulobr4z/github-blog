import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Blog } from '../pages/Blog'
import { Post } from '../pages/Post'
import { routes } from '.'

export const GithubBlogRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.post} element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}
