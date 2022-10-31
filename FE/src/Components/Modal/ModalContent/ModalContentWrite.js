const ModalContentWrite = () => {
    <div className='modal_review_bottom'>
          <div className='modal_review_bottom_clean'>
            <p>화장실이 깨끗하게 청소되어 있나요?</p>
            <label for="verygood">매우 깨끗</label><input type="radio" id='verygood' value="verygood" name='clean'/>
            <label for="verygood">깨끗</label><input type="radio" id='good' value="good" name='clean'/>
            <label for="sosoclean">보통</label><input type="radio" id='sosclean' value="sosoclean" name='clean'/>
            <label for="bad">더럽</label><input type="radio" id='bad' value="bad" name='clean'/>
            <label for="sobad">매우 더럽</label><input type="radio" id='sobad' value="sobad" name='clean'/>
          </div>
          <div className='modal_review_bottom_num'>
            <p>변기 개수</p>
            <label for="onetwo">1 ~ 2</label><input type="radio" id='onetwo' value="onetwo" name='num'/>
            <label for="threefour">3 ~ 4</label><input type="radio" id='threefour' value="threefour" name='num'/>
            <label for="fivesix">5 ~ 6</label><input type="radio" id='ivesix' value="ivesix" name='num'/>
            <label for="seven">7 이상</label><input type="radio" id='seven' value="seven" name='num'/>
          </div>
          <div className='modal_review_bottom_size'>
            <p>화장실 크기</p>
            <label for="verybig">매우 큼</label><input type="radio" id='verygood' value="verygood" name='size'/>
            <label for="big">큼</label><input type="radio" id='good' value="good" name='size'/>
            <label for="sososize">보통</label><input type="radio" id='sososize' value="sososize" name='size'/>
            <label for="small">작음</label><input type="radio" id='small' value="small" name='size'/>
            <label for="veraysmall">매우 작음</label><input type="radio" id='verysmall' value="veraysmall" name='size'/>
          </div>
          <div className='modal_review_bottom_convenience'>
            <p>이용 편의성</p>
            <label for="verycon">매우 좋음</label><input type="radio" id='verycon' value="verycon" name='convenience'/>
            <label for="con">좋음</label><input type="radio" id='con' value="con" name='convenience'/>
            <label for="socon">보통</label><input type="radio" id='socon' value="socon" name='convenience'/>
            <label for="badcon">좋지 않음</label><input type="radio" id='badcon' value="badcon" name='convenience'/>
            <label for="verybadcon">매우 좋지 않음</label><input type="radio" id='verybadcon' value="verybadcon" name='convenience'/>
          </div>
          <div className='modal_review_bottom_star'>
            <p>평점</p>
            ⭐️⭐️⭐️⭐️⭐️
          </div>
          <div className='modal_review_bottom_text'>
            <textarea/>
          </div>
          <div className='modal_review_bottom_button'>
            <button>등록하기</button>
          </div>
        </div>
}

export default ModalContentWrite;