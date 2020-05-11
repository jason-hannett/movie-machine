import React from "react";
import "./Browse.scss";
import {withRouter} from 'react-router-dom';

function Browse(props) {

  return (
    <div className="browse-page">
      <section className="browse-section">
        <section className="box">
          <div onClick={() => props.history.push('/movies_genre/28')}>
            <p>Action</p>
            <img
              src="https://www.thewrap.com/wp-content/uploads/2015/03/daniel-craig-james-bond-mexico-incentives.jpg"
              alt="action movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/12')}>
            <p>Adventure</p>
            <img
              src="https://cdn.vox-cdn.com/thumbor/xspleGUselYiaSGDfc1YcelmcqU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9918943/DF_05153_R_2040.jpg"
              alt="adventure movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/16')}>
            <p>Animation</p>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B8D014C4D6BEAE3FB5911345CD9E0118FCBF8CFB3CA36E3AC083B9012A75E8D/scale?aspectRatio=1.78&format=jpeg"
              alt="animation movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/35')}>
            <p>Comedy</p>
            <img
              src="https://www.indiewire.com/wp-content/uploads/2017/08/screen-shot-2014-08-12-at-3-09-17-pm.png?w=780"
              alt="comedy movie"
            />
          </div>
        </section>
        <section className="box ">
          <div onClick={() => props.history.push('/movies_genre/80')}>
            <p>Crime</p>
            <img
              src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABclozqDKJM1ljO5Lcmravlkh2J_VvKsVdyTKuKg_iZxpGyjIDVu_RF4-02JaMba_mk6w4nuf4lrhInWpKH7_nakm1J3D.jpg?r=189"
              alt="crime movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/99')}>
            <p>Documentary</p>
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/fox-197974-Full-Image_GalleryBackground-en-US-1550041784805._SX1080_.jpg"
              alt="documentary movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/18')}>
            <p>Drama</p>
            <img
              src="https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/shawshank-redemtpion-the-1994-007-tim-robbins-medium-shot-prison-bfi-00n-fzm.jpg?itok=ShOv_Cxv"
              alt="drama movie"
            />
          </div>
          <div onClick={() => props.history.push('/movies_genre/10751')}>
              <p>Family</p>
              <img src='https://img1.looper.com/img/gallery/will-a-princess-bride-remake-actually-happen/intro-1569000319.jpg' alt='family movie'/>
          </div>
        </section>
        <section className="box">
          <div onClick={() => props.history.push('/movies_genre/14')}>
              <p>Fantasy</p>
              <img src='https://www.thefactsite.com/wp-content/uploads/2017/11/gandalf-facts.jpg' alt='fantasy movie'/>
          </div>
          <div onClick={() => props.history.push('/movies_genre/36')}>
              <p>History</p>
              <img src='https://townsquare.media/site/442/files/2017/09/Last-of-the-Mohicans-main-image.jpg?w=980&q=75' alt='history movie'/>
          </div>
          <div>
              <p onClick={() => props.history.push('/movies_genre/27')}>Horror</p>
              <img src='https://i1.wp.com/readysteadycut.com/wp-content/uploads/2018/02/fsu9mlkjn5qjc7fislca.jpg?fit=800%2C450&ssl=1' alt='horror movie'/>
          </div>
          <div onClick={() => props.history.push('/movies_genre/10402')}>
              <p>Music</p>
              <img src='https://cdn3.whatculture.com/images/2017/12/1baedbbc2a67ad97-600x338.jpg' alt='music movie'/>
          </div>
        </section>
        <section className="box">
          <div onClick={() => props.history.push('/movies_genre/9648')}>
              <p>Mystery</p>
              <img src='https://media.npr.org/assets/img/2019/11/27/knives-out-ko_d32_13938_r_rgb_wide-bceb9c4f1e99794d995411dec6fc021672ebfabf.jpg?s=1400' alt='mystery movie'/>
          </div>
          <div onClick={() => props.history.push('/movies_genre/10749')}>
              <p>Romance</p>
              <img src='https://api.time.com/wp-content/uploads/2014/06/177927_full.jpg' alt='romance movie'/>
          </div>
          <div onClick={() => props.history.push('/movies_genre/878')}>
              <p>Sci-Fi</p>
              <img src='https://cdn.mos.cms.futurecdn.net/u2kbNrjMwgRGiVoFcB2PnM.jpg' alt='Science Fiction Movie'/>
          </div>
          <div onClick={() => props.history.push('/movies_genre/53')}>
              <p>Thriller</p>
              <img src='https://i3.wp.com/bestmoviecast.com/wp-content/uploads/2020/01/Underwater.jpg' alt='thriller movie'/>
          </div>
        </section>
        <section className="box last-box">
          <div onClick={() => props.history.push('/movies_genre/10752')}>
              <p>War</p>
              <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/8v66-d041-00036r-1578589475.jpg' alt='war movie'/>
          </div>
          <div>
              <p onClick={() => props.history.push('/movies_genre/37')}>Western</p>
              <img src='https://www.nwherald.com/_internal/cimg!0/me8bnugg4fiyfxct3fti8lqd30cykss' alt='western movie' />
          </div>
        </section>
      </section>
    </div>
  );
}

export default withRouter(Browse);
