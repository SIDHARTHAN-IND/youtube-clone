import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel="Clever Programmer"
            verified
            subs="920k"
            noOfVideos={556}
            description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like"
            />
            <hr/>
            <VideoRow 
            views="151k"
            subs="920k"
            description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉"
            channel="Clever Pragrammer"
            timestamp="Streamed live on 29 Jul 2020"
            title="Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CJTtpoMG&rs=AOn4CLA-iLohzW1tcQwG5mhDa3FXiwZY8w"
            />
            <VideoRow 
            views="151k"
            subs="920k"
            description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉"
            channel="Clever Pragrammer"
            timestamp="Streamed live on 29 Jul 2020"
            title="Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CJTtpoMG&rs=AOn4CLA-iLohzW1tcQwG5mhDa3FXiwZY8w"
            />
            <VideoRow 
            views="151k"
            subs="920k"
            description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉"
            channel="Clever Pragrammer"
            timestamp="Streamed live on 29 Jul 2020"
            title="Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CJTtpoMG&rs=AOn4CLA-iLohzW1tcQwG5mhDa3FXiwZY8w"
            />
        </div>
    )
}

export default SearchPage
