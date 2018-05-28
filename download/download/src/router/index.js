import Vue from 'vue'
import Router from 'vue-router'
import Identification from '@/components/Identification'
import iosDownload from '@/components/iosDownload'
import androidDownload from '@/components/androidDownload'
import androidDownloadCover from '@/components/androidDownloadCover'
import iosDownloadCover from '@/components/iosDownloadCover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Identification',
      component: Identification
    },
    {
      path:'/iosDownload',
      name:'iosDownload',
      component:iosDownload
    },
    {
      path:'/androidDownload',
      name:androidDownload,
      component:androidDownload
    },
    {
      path:'/androidDownloadCover',
      name:androidDownloadCover,
      component:androidDownloadCover
    },
    {
      path:'/iosDownloadCover',
      name:iosDownloadCover,
      component:iosDownloadCover
    }
  ]
})
