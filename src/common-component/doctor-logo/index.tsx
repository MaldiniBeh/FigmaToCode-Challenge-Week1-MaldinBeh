import React, { FC } from 'react'
import './doctor-logo.css'

interface IDoctorLogo {
  text: string
  position: 'header' | 'footer'
}
const DoctorLogo: FC<IDoctorLogo> = (props) => {
  const { text, position } = props
  return (
    <div className='flex'>
      <div className='relative -top-7 left-[8.8rem]'>
        <span className='plus'>
          {position === 'header' ? (
            <svg
              width='63'
              height='63'
              viewBox='0 0 63 63'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_di_3_414)'>
                <circle cx='31.5' cy='27.5002' r='12' fill='#5FD3BD' />
              </g>
              <rect
                x='28.8913'
                y='20.7178'
                width='5.21739'
                height='13.5652'
                rx='0.782609'
                fill='white'
              />
              <rect
                x='38.2826'
                y='24.8916'
                width='5.21739'
                height='13.5652'
                rx='0.782609'
                transform='rotate(90 38.2826 24.8916)'
                fill='white'
              />
              <defs>
                <filter
                  id='filter0_di_3_414'
                  x='0.5'
                  y='0.500244'
                  width='62'
                  height='62'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='9.5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_3_414'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_3_414'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='arithmetic'
                    k2='-1'
                    k3='1'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='shape'
                    result='effect2_innerShadow_3_414'
                  />
                </filter>
              </defs>
            </svg>
          ) : (
            <svg
              width='62'
              height='62'
              viewBox='0 0 62 62'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_di_3_27)'>
                <circle cx='31' cy='27' r='12' fill='white' />
              </g>
              <rect
                x='28.3913'
                y='20.2175'
                width='5.21739'
                height='13.5652'
                rx='0.782609'
                fill='url(#paint0_linear_3_27)'
              />
              <rect
                x='37.7826'
                y='24.3914'
                width='5.21739'
                height='13.5652'
                rx='0.782609'
                transform='rotate(90 37.7826 24.3914)'
                fill='url(#paint1_linear_3_27)'
              />
              <defs>
                <filter
                  id='filter0_di_3_27'
                  x='0'
                  y='0'
                  width='62'
                  height='62'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='9.5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_3_27'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_3_27'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='arithmetic'
                    k2='-1'
                    k3='1'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='shape'
                    result='effect2_innerShadow_3_27'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_3_27'
                  x1='29.6957'
                  y1='18.7103'
                  x2='42.2501'
                  y2='25.627'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#1678F2' />
                  <stop offset='1' stopColor='#65A8FB' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_3_27'
                  x1='39.0869'
                  y1='22.8841'
                  x2='51.6414'
                  y2='29.8008'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#1678F2' />
                  <stop offset='1' stopColor='#65A8FB' />
                </linearGradient>
              </defs>
            </svg>
          )}
        </span>
      </div>
      <span
        className={`doctorTypo
       ${position === 'footer' ? 'header' : 'footer'}`}
      >
        {text}
      </span>
    </div>
  )
}

export default DoctorLogo
