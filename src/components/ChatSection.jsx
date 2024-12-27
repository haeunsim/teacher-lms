import React from "react";
import styled from "styled-components";
import catImg from "../assets/images/Illustration_cat.png";

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
`;

const ContentsArea = styled.div`
  background: #fff;
  width: 45%;
  height: 100%;
  padding: 20px 30px;
`;

const LessonHeader = styled.div`
  border-radius: 8px;
`;

const LessonTitle = styled.div`
  text-align: center;
  padding: 8px;
  background: #f1f8ff;
  border-radius: 8px 8px 0 0;
  border: 1px solid #bababa;

  h4 {
    font-size: 15px;
    font-weight: 300;
    color: #525252;
  }
`;

const LessonInfo = styled.div`
  display: flex;
  border-radius: 0 0 8px 8px;
  border: 1px solid #bababa;
  border-top: none;
`;

const LessonSubTitle = styled.p`
  width: 50%;
  border-right: 1px solid #bababa;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LessonDescription = styled.p`
  width: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  color: #292929;

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    span {
      color: #2e90ff;
    }
  }
`;

const ChatArea = styled.div`
  width: 45%;
  height: 100%;
  padding: 20px 30px;
  background: #f1f8ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatStartButton = styled.button`
  width: 260px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #2e90ff;
  color: #fff;
  font-size: 14px;
`;

const Chat = styled.div`
  height: 580px;
`;

const ChatInputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #bababa;
  border-radius: 6px;
  &::placeholder {
    color: #adadad;
    font-size: 12px;
    font-weight: 400;
  }
`;

const SendButton = styled.button`
  border-radius: 6px;
  border: 1px solid #bababa;
  background: #f5f5f5;
  width: 47px;
  height: 35px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin: 20px 0;
  position: relative;
  display: flex;
  align-items: center;
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  background-color: #2e90ff;
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${(props) => props.width}%;
  z-index: 1;
`;

const Indicator = styled.div`
  z-index: 100;
  background: #fff;
`;

const StepIndicators = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .label {
    font-size: 14px;
    color: #666;
    white-space: nowrap;
  }
`;

const ChatSection = () => {
  const steps = [
    "채우기",
    "일광욕",
    "산책",
    "캣타워",
    "그림 감상",
    "간식 먹기",
    "휴식하기",
  ];

  return (
    <section>
      <h2 className="title3">사전 테스트</h2>
      <ChatContainer>
        <ContentsArea>
          <LessonHeader>
            <LessonTitle>
              <h4>우리가 사는 곳</h4>
            </LessonTitle>
            <LessonInfo>
              <LessonSubTitle>고양이 깨우기</LessonSubTitle>
              <LessonDescription>
                우리 주변에 있는 여러 장소의 좋은 점과 불편한 점을 조사해볼까요?
              </LessonDescription>
            </LessonInfo>
          </LessonHeader>

          <Content>
            <img src={catImg} alt="고양이 일러스트" />
            <div>
              <p>고양이와 털실을 모두 굴리면 채팅 수업이 끝나요 :)</p>
              <p>
                얼마나 굴렸는지 <span>아래에서</span> 확인할 수 있어요!
              </p>
            </div>
          </Content>

          <ProgressBar>
            <Indicator>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Step Indicator_Icon">
                  clipPath id="Ellipse 112" cx="14.1251" cy="13.7778"
                  r="11.7778" fill="white"/>
                  <path
                    id="Vector"
                    d="M26.6251 25.2646H19.6251C22.3707 23.8003 24.4861 21.3824 25.5726 18.4666C26.6591 15.5507 26.6418 12.3382 25.5239 9.43418C24.406 6.53019 22.2647 4.13528 19.5034 2.70063C16.7422 1.26598 13.5516 0.890647 10.5328 1.64535C7.51394 2.40005 4.87534 4.23268 3.11406 6.79797C1.35278 9.36325 0.590421 12.4841 0.970621 15.5725C1.35082 18.6609 2.84733 21.5036 5.17819 23.5652C7.50906 25.6267 10.5134 26.7646 13.6251 26.7646H26.6251C26.824 26.7646 27.0147 26.6856 27.1554 26.545C27.296 26.4043 27.3751 26.2136 27.3751 26.0146C27.3751 25.8157 27.296 25.625 27.1554 25.4843C27.0147 25.3437 26.824 25.2646 26.6251 25.2646ZM13.6251 2.76467C15.7609 2.76064 17.8532 3.36788 19.6551 4.51466C18.2566 5.11825 16.9108 5.83697 15.6313 6.66341C13.6506 5.38787 11.5144 4.37166 9.27508 3.63966C10.6523 3.06098 12.1313 2.76348 13.6251 2.76467ZM7.40008 4.64841C9.82532 5.29398 12.1447 6.2863 14.2863 7.59466C13.2825 8.32871 12.3288 9.12881 11.4313 9.98966C9.23872 8.8016 6.86384 7.98632 4.40384 7.57716C5.2124 6.42362 6.22842 5.43049 7.40008 4.64841ZM3.57259 8.96716C5.93037 9.29215 8.2158 10.0154 10.3313 11.1059C9.5126 11.9838 8.75143 12.9136 8.05258 13.8897C6.29841 13.0787 4.42233 12.563 2.50009 12.3634C2.67394 11.1813 3.03603 10.0347 3.57259 8.96716ZM4.51384 20.6059C3.1213 18.6905 2.37245 16.3827 2.37509 14.0147V13.8584C4.04091 14.0346 5.66892 14.4703 7.20009 15.1497C6.10614 16.8637 5.20524 18.6936 4.51384 20.6059ZM5.63884 21.9359C6.84521 18.2422 8.85181 14.8603 11.5155 12.0313C14.1792 9.2023 17.4344 6.99596 21.0488 5.56966C21.9832 6.39257 22.7755 7.36394 23.3938 8.44466C19.8352 9.63525 16.6266 11.6883 14.0544 14.4206C11.4822 17.1529 9.62639 20.4794 8.65258 24.1034C7.53715 23.5515 6.52055 22.8191 5.64384 21.9359H5.63884ZM13.5138 25.2634C12.3342 25.2533 11.1636 25.0572 10.0451 24.6821C10.9397 21.2256 12.6916 18.0504 15.1387 15.4504C17.5858 12.8504 20.649 10.9095 24.0451 9.80716C24.489 10.9001 24.7565 12.0566 24.8376 13.2334C22.12 14.1764 19.6711 15.7633 17.7001 17.8584C15.729 19.9535 14.2944 22.4946 13.5188 25.2646L13.5138 25.2634ZM24.8413 14.8222C24.6521 17.4016 23.5814 19.8375 21.8088 21.721C20.0362 23.6044 17.6696 24.8208 15.1063 25.1659C15.8456 22.8193 17.1056 20.6702 18.7922 18.8791C20.4788 17.0879 22.5484 15.7011 24.8463 14.8222H24.8413Z"
                    fill="#2E90FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_605_6877">
                    <rect
                      width="26.5"
                      height="26.5"
                      fill="white"
                      transform="translate(0.875061 0.52832)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Indicator>
            <Progress width={60} />

            <StepIndicators>
              {steps.map((step, index) => (
                <Step key={index}>
                  <span className="label">{step}</span>
                </Step>
              ))}
            </StepIndicators>
          </ProgressBar>
        </ContentsArea>

        {/* 채팅화면 */}
        <ChatArea>
          <ChatStartButton>채팅 시작</ChatStartButton>
          <Chat></Chat>
          <ChatInputWrapper>
            <ChatInput
              type="text"
              placeholder="꾹꾹이를 하려면 여기에 무엇이든 적어보세요!"
            />
            <SendButton>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
              <path d="M20.3666 19.6714L18.5252 15.3201C17.4019 13.1639 16.0116 11.759 13.6085 11.759C11.2054 11.759 9.76909 13.1639 8.6366 15.3201L6.79515 19.6714C6.65901 19.9767 6.58678 20.3095 6.58339 20.6471C6.57845 21.2958 6.81569 21.9203 7.2434 22.3845C7.67111 22.8487 8.25462 23.1149 8.86678 23.1252C9.26026 23.1198 9.6463 23.0108 9.99022 22.8082C10.3341 22.6055 10.6251 22.3155 10.8371 21.9642C11.0971 21.4421 11.5 21.0154 11.993 20.7403C12.4859 20.4652 13.0459 20.3545 13.5993 20.4227C14.1527 20.3545 14.7126 20.4652 15.2056 20.7403C15.6986 21.0154 16.1015 21.4421 16.3615 21.9642C16.5665 22.3048 16.8459 22.5881 17.176 22.7902C17.5061 22.9923 17.8773 23.1072 18.2582 23.1252C18.8711 23.1252 19.4589 22.8672 19.8923 22.408C20.3257 21.9487 20.5692 21.3258 20.5692 20.6764C20.5743 20.3295 20.505 19.9859 20.3666 19.6714ZM8.179 7.05056C8.21668 7.41466 8.31062 7.7688 8.45539 8.0925C8.60017 8.4162 8.7929 8.70303 9.02245 8.9364C9.25199 9.16976 9.51379 9.34504 9.7927 9.45208C10.0716 9.55912 10.3621 9.59581 10.6473 9.56001C10.9326 9.52422 11.207 9.41666 11.4546 9.24355C11.7022 9.07045 11.9181 8.83523 12.0899 8.5515C12.2617 8.26778 12.3859 7.94119 12.4553 7.59061C12.5247 7.24003 12.538 6.87244 12.4944 6.50908C12.4567 6.14497 12.3628 5.79083 12.218 5.46713C12.0733 5.14343 11.8805 4.8566 11.651 4.62323C11.4214 4.38987 11.1596 4.21459 10.8807 4.10755C10.6018 4.00051 10.3113 3.96382 10.0261 3.99962C9.74082 4.03541 9.46645 4.14297 9.21884 4.31608C8.97124 4.48918 8.7553 4.7244 8.58353 5.00812C8.41177 5.29184 8.28757 5.61844 8.21813 5.96902C8.1487 6.3196 8.1354 6.6872 8.179 7.05056Z" fill="white" strstrokeWidth" stroke-widstrokeLinecapstroke-listrokeLinejointroke-linejoin="round"/>
              <path d="M3.03076 12.2099C3.12679 12.5571 3.27695 12.8847 3.47258 13.1737C3.6682 13.4627 3.90542 13.7075 4.17056 13.8938C4.4357 14.0802 4.72351 14.2045 5.0174 14.2595C5.31128 14.3146 5.60543 14.2993 5.88287 14.2146C6.16032 14.1298 6.41557 13.9774 6.63391 13.7659C6.85226 13.5544 7.02938 13.2882 7.15505 12.9825C7.28072 12.6768 7.35247 12.3377 7.36614 11.9848C7.37982 11.6319 7.33516 11.2721 7.23474 10.9262C7.13696 10.5814 6.98577 10.2565 6.78979 9.97026C6.59381 9.68397 6.3569 9.44183 6.09256 9.25765C5.82823 9.07348 5.54166 8.95088 5.24922 8.89686C4.95677 8.84283 4.66418 8.85844 4.38814 8.9428C4.1121 9.02715 3.85803 9.17859 3.64042 9.38848C3.42282 9.59837 3.24594 9.86259 3.1199 10.1661C2.99386 10.4695 2.92111 10.8063 2.90581 11.1571C2.89052 11.508 2.93298 11.8661 3.03076 12.2109M16.5582 9.43912C16.8459 9.47972 17.1398 9.44843 17.4227 9.34706C17.7055 9.2457 17.9718 9.07628 18.206 8.84865C18.4402 8.62103 18.6377 8.33974 18.7869 8.02114C18.9361 7.70253 19.0341 7.35297 19.0752 6.99276C19.1163 6.63256 19.0997 6.2689 19.0263 5.92292C18.9529 5.57693 18.8243 5.25554 18.6478 4.9774C18.4713 4.69927 18.2505 4.46995 17.9982 4.30277C17.746 4.13559 17.4673 4.03388 17.1784 4.00357C16.8906 3.96296 16.5968 3.99426 16.3139 4.09562C16.031 4.19699 15.7647 4.36641 15.5305 4.59403C15.2963 4.82166 15.0988 5.10295 14.9496 5.42155C14.8004 5.74016 14.7024 6.08972 14.6613 6.44993C14.6202 6.81013 14.6368 7.17379 14.7102 7.51977C14.7836 7.86575 14.9123 8.18715 15.0888 8.46528C15.2653 8.74342 15.486 8.97274 15.7383 9.13992C15.9906 9.3071 16.2692 9.4088 16.5582 9.43912Z" fill="white"/>
              <path d="M3.03076 12.2099C3.12679 12.5571 3.27695 12.8847 3.47258 13.1737C3.6682 13.4627 3.90542 13.7075 4.17056 13.8938C4.4357 14.0802 4.72351 14.2045 5.0174 14.2595C5.31128 14.3146 5.60543 14.2993 5.88287 14.2146C6.16032 14.1298 6.41557 13.9774 6.63391 13.7659C6.85226 13.5544 7.02938 13.2882 7.15505 12.9825C7.28072 12.6768 7.35247 12.3377 7.36614 11.9848C7.37982 11.6319 7.33516 11.2721 7.23474 10.9262C7.13696 10.5814 6.98577 10.2565 6.78979 9.97026C6.59381 9.68397 6.3569 9.44183 6.09256 9.25765C5.82823 9.07348 5.54166 8.95088 5.24922 8.89686C4.95677 8.84283 4.66418 8.85844 4.38814 8.9428C4.1121 9.02715 3.85803 9.17859 3.64042 9.38848C3.42282 9.59837 3.24594 9.86259 3.1199 10.1661C2.99386 10.4695 2.92111 10.8063 2.90581 11.1571C2.89052 11.508 2.93298 11.8661 3.03076 12.2109M16.5582 9.43912C16.8459 9.47972 17.1398 9.44843 17.4227 9.34706C17.7055 9.2457 17.9718 9.07628 18.206 8.84865C18.4402 8.62103 18.6377 8.33974 18.7869 8.02114C18.9361 7.70253 19.0341 7.35297 19.0752 6.99276C19.1163 6.63256 19.0997 6.2689 19.0263 5.92292C18.9529 5.57693 18.8243 5.25554 18.6478 4.9774C18.4713 4.69927 18.2505 4.46995 17.9982 4.30277C17.746 4.13559 17.4673 4.03388 17.1784 4.00357C16.8906 3.96296 16.5968 3.99426 16.3139 4.09562C16.031 4.19699 15.7647 4.36641 15.5305 4.59403C15.2963 4.82166 15.0988 5.10295 14.9496 5.42155C14.8004 5.74016 14.7024 6.08972 14.6613 6.44993C14.6202 6.81013 14.6368 7.17379 14.7102 7.51977C14.7836 7.86575 14.9123 8.18715 15.0888 8.46528C15.2653 8.74342 15.486 8.97274 15.7383 9.13992C15.9906 9.3071 16.2692 strokeWidth82 9.43912Z"strokeLinecap9A" strokstrokeLinejoin83" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.5457 14.2141C21.8642 14.2967 22.2023 14.3133 22.5406 14.2631C22.8788 14.2129 23.2105 14.0969 23.5165 13.9216C23.8226 13.7463 24.097 13.5153 24.3239 13.2419C24.5508 12.9684 24.7258 12.6579 24.8388 12.3282C24.9518 11.9985 25.0006 11.6561 24.9823 11.3208C24.9641 10.9854 24.8791 10.6637 24.7324 10.3741C24.5857 10.0845 24.38 9.8328 24.1274 9.63343C23.8747 9.43406 23.5799 9.29097 23.26 9.21239C22.942 9.13206 22.6049 9.11721 22.268 9.16869C21.9311 9.22017 21.601 9.33698 21.2965 9.51244C20.9919 9.6879 20.719 9.91858 20.4933 10.1913C20.2675 10.464 20.0933 10.7735 19.9807 11.102C19.8681 11.4304 19.8192 11.7715 19.8368 12.1057C19.8545 12.4399 19.9383 12.7607 20.0835 13.0498C20.2287 13.3389 20.4325 13.5906 20.6832 13.7905C20.9339 13.9904 21.2267 14.1347 21.5447 14.215" fill="white"/>
              <path d="M21.5457 14.2141C21.8642 14.2967 22.2023 14.3133 22.5406 14.2631C22.8788 14.2129 23.2105 14.0969 23.5165 13.9216C23.8226 13.7463 24.097 13.5153 24.3239 13.2419C24.5508 12.9684 24.7258 12.6579 24.8388 12.3282C24.9518 11.9985 25.0006 11.6561 24.9824 11.3208C24.9641 10.9854 24.8791 10.6637 24.7324 10.3741C24.5857 10.0845 24.38 9.8328 24.1274 9.63343C23.8747 9.43406 23.5799 9.29097 23.26 9.21239C22.942 9.13206 22.6049 9.11721 22.268 9.16869C21.9311 9.22017 21.601 9.33698 21.2965 9.51244C20.9919 9.6879 20.719 9.91858 20.4933 10.1913C20.2675 10.464 20.0933 10.7735 19.9807 11.102C19.8681 11.4304 19.8192 11.7715 19.8368 12.1057C19.8545 12.4399 19.9383 12.7607 20.0835 13.0498C20.2287 13.3389 20.4325 13.5906 20.6832 13.strokeWidth 13.9904 21.strokeLinecap1.5447 14strokeLinejoin9A9A9A" stroke-width="0.552083" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
            </SendButton>
          </ChatInputWrapper>
        </ChatArea>
      </ChatContainer>
    </section>
  );
};

export default ChatSection;