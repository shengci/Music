export default {
    path:'/recommend',
    component: () => import('@/views/Recommend'),
    children:[
        {
            path:'songSheet',
            component:() => import('@/components/SongSheet')
        },
        {
            path:'/recommend',
            redirect:'/recommend/songSheet'
        }
    ]
}