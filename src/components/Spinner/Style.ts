import styled from 'styled-components'
export default styled.div`
.loadingSpinnerContainer{
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
}
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}
ul li {
  list-style: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  animation: grow 1.6s ease-in-out infinite;
}

/* Define animation */
@keyframes grow {
  0%,
  40%,
  100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(1);
  }
}

/* Define li properties */
ul li:nth-child(1) {
  animation-delay: -1.4s;
  background: #ffff00;
  box-shadow: 0 0 50px #ffff00;
}
ul li:nth-child(2) {
  animation-delay: -1.2s;
  background: #76ff03;
  box-shadow: 0 0 50px #76ff03;
}
ul li:nth-child(3) {
  animation-delay: -1s;
  background: #f06292;
  box-shadow: 0 0 50px #f06292;
}
ul li:nth-child(4) {
  animation-delay: -0.8s;
  background: #4fc3f7;
  box-shadow: 0 0 50px #4fc3f7;
}
ul li:nth-child(5) {
  animation-delay: -0.6s;
  background: #ba68c8;
  box-shadow: 0 0 50px #ba68c8;
}
ul li:nth-child(6) {
  animation-delay: -0.4s;
  background: #f57300;
  box-shadow: 0 0 50px #f57300;
}
ul li:nth-child(7) {
  animation-delay: -0.2s;
  background: #673ab7;
  box-shadow: 0 0 50px #673ab7;
}

`

export const AntdSpinnerStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`