import styled from 'styled-components';

const ProfileBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 6px 0 rgba(47,83,151,0.10);
    border-radius: 3px;
    margin: 16px 16px;
    padding: 16px 16px;
    width: 200px;
    text-align: center;
    transition: 300ms;
    flex-grow: 1;

    &:hover {
        box-shadow: 0 0 20px 9px rgba(0,0,0,0.03);
	}
  `

  const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 2px 6px 0 rgba(47,83,151,0.10);
`

const TeamWrapper = styled.div`
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
    background-color: #F5F7FA;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    padding-left: calc(5% - 16px);
    padding-right: calc(5% - 16px);
    /* padding: 0 5%; */
  `
const ViewBtn = styled.span`
    width: 50%;
    font-size: 14px;
    color: #98A0A6;
    font-weight: 300;
    padding: 8px 0;
    border-radius: 100px;
    transition: 300ms;
    cursor: pointer;
    &:hover {
        background-color: #507BFC;
        color: white;
        box-shadow: 0 10px 20px 0 rgba(80,123,252,0.50);
    }
`


const MarginB50 = `
    margin-bottom: 50px;
`

const HeaderSection = styled.div`
    ${MarginB50}    
`

const SmallTitle = styled.h3`
    ${MarginB50}    
`

const Title = styled.h2`  
`

const SinglePerson = styled.div`
    ${MarginB50}    
`

const PersonImage = styled.div`   
`

const Icon = styled.span`
`

const FullN = styled.h5`
`

const PersonInfo = styled.div`
`

const Locate = styled.div``

const SectionTeam = styled.section`
    ${MarginB50}
    font-family: "Poppins", sans-serif;
    padding: 80px 0;
    ${HeaderSection} ${SmallTitle} {
        margin-bottom: 25px;
        font-size: 16px;
        font-weight: 500;
        color: #3e64ff;
    }

    ${HeaderSection} ${Title} { 
        font-weight: 700;
        font-size: 45px;
    }
    ${SinglePerson} {
        margin-top: 30px;
        padding: 30px;
        background-color: #f6f9ff;
        border-radius: 5px;
        &:hover {
            background: linear-gradient(to right, #016cec, #00b5f7);
        }

        ${PersonImage} {
            position: relative;
            margin-bottom: 50px;
            border-radius: 50%;
            border: 4px dashed transparent;
            transition: padding .3s;
            &:hover {
                padding: 12px;
                border: 4px dashed #fff;
            }

            & img {
                width: 100%;
                border-radius: 50%;
            }

            ${Icon} {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%,50%);
                display: inline-block;
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                background: linear-gradient(to right, #016cec, #00b5f7);
                color: #fff;
                border-radius: 50%;
                font-size: 24px; 
            }
        }
    }
    ${SinglePerson}:hover ${PersonImage} ${Icon} {
        background: none;
        background-color: #fff;
        color: #016cec;
    }

    ${SinglePerson} ${PersonInfo} ${FullN} {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }

    ${SinglePerson} ${PersonInfo} ${Locate} {
        text-transform: uppercase;
        font-size: 14px;
        color: #016cec;
    }

    ${SinglePerson}:hover ${FullN}, ${SinglePerson}:hover ${Locate} {
        color: #fff;
    }
 
`


export {
    ClearButton,
    TextField,
    ProfileBox,
    ProfileImage,
    TeamWrapper,
    ViewBtn,

    SectionTeam,
    MarginB50,
    HeaderSection,
    SmallTitle, Title,
    SinglePerson,
    PersonImage,
    Icon,
    FullN,
    PersonInfo,
    Locate
}




// p,a,h1,h2,h3,h4 {
// 	margin: 0;
// 	padding: 0;
// }

// .section-team {
// 	font-family: "Poppins", sans-serif;
// 	padding: 80px 0;
// }

// .section-team .header-section {
// 	margin-bottom: 50px;
// }

// .section-team .header-section .small-title {
//     margin-bottom: 25px;
// 	font-size: 16px;
//     font-weight: 500;
//     color: #3e64ff;
// }

// .section-team .header-section .title {
//     font-weight: 700;
//     font-size: 45px;
// }

// .section-team .single-person {
// 	margin-top: 30px;
// 	padding: 30px;
// 	background-color: #f6f9ff;
// 	border-radius: 5px;
// }

// .section-team .single-person:hover {
// 	background: linear-gradient(to right, #016cec, #00b5f7);
// }

// .section-team .single-person .person-image {
//     position: relative;
//     margin-bottom: 50px;
//     border-radius: 50%;
//     border: 4px dashed transparent;
//     transition: padding .3s;
// }

// .section-team .single-person:hover .person-image {
// 	padding: 12px;
//     border: 4px dashed #fff;
// }

// .section-team .single-person .person-image img {
// 	width: 100%;
//     border-radius: 50%;
// }

// .section-team .single-person .person-image .icon {
// 	position: absolute;
//     bottom: 0;
//     left: 50%;
//     transform: translate(-50%,50%);
//     display: inline-block;
//     width: 60px;
//     height: 60px;
//     line-height: 60px;
//     text-align: center;
//     background: linear-gradient(to right, #016cec, #00b5f7);
//     color: #fff;
//     border-radius: 50%;
//     font-size: 24px;
// }

// .section-team .single-person:hover .person-image .icon {
// 	background: none;
// 	background-color: #fff;
// 	color: #016cec;
// }

// .section-team .single-person .person-info .full-name {
// 	margin-bottom: 10px;
// 	font-size: 28px;
//     font-weight: 700;
// }

// .section-team .single-person .person-info .speciality {
//     text-transform: uppercase;
//     font-size: 14px;
//     color: #016cec;
// }

// .section-team .single-person:hover .full-name,
// .section-team .single-person:hover .speciality {
// 	color: #fff;
// }