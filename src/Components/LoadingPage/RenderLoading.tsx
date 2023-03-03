import React from 'react'
import { useSelector } from 'react-redux'
import LoadingPage from './LoadingPage'

function RenderLoading() {
  const project = useSelector((state: any) => state.projects)

  return (

    project.loading

    && <LoadingPage />
  )
}

export default RenderLoading
