import { useResponsiveApi } from "../../App";
import Banner from "../../components/Banner";
import Content2 from "../../components/Content2";
import Content3 from "../../components/Content3";
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";

export default function ResourceM(){
    var {isMobile} = useResponsiveApi();
    return (<>
        <Banner></Banner>
        <div className="simpleflex">
            {isMobile?<div></div>:<LeftMenu></LeftMenu>}
            <div className="contenttext">

            <h1>돈과 시간은 얼마나 준비해야 하나요?</h1>
            
  학원에 등록하시겠다고 하시면 국비과정은 일반적으로 비용이 들지 않습니다.<br/><br/>

    오히려 채용연계 과정에서는 50~100만원 정도를 생활비로 지원을 받기도 합니다.<br/><br/>  

    만약 사비로 학원을 등록하신다면 <br/>
    1년과정에 500~700만원 정도는 준비하셔야 합니다.<br/><br/>

    독학을 하시겠다고 하면, <br/>
    일반적으로 학원에서 1~3개월간 50~100만원 정도 되는 커리큘럼을 <br/>
    3~10만원에 수강하실 수 있습니다. <br/><br/>
    
    인프런과 같은 사이트에서는 특정 직군이 되기 위한 로드맵을 <br/>
    커리큘럼 내에서 함께 제공해주기도 합니다.<br/><br/>

    하지만 생활비는 별도로 소비되는 고정지출입니다.<br/>
    만약 부모님과 함께 지내시면서 집에서 공부하신다면, <br/>
    집밥을 먹으며 비용이 지출되지 않는다는 엄청난 장점이 있습니다.<br/><br/>

    하지만 만약 타지로 나가서 생활을 하신다면<br/>
    기본적인 자취비용에 대해서 염두에 두셔야합니다. <br/><br/>
    
    서울/경기의 경우 고시원이 월 30~50정도 비용이 발생하며, <br/>
    원룸 또는 전세의 경우에는 추가 보증금이 필요할수도 있습니다.<br/><br/>

    요즘에 식비가 많이 올라서 직접 해먹는다면 <br/>
    한끼에 6천원, 외식의 경우는 1만원정도로 계산을 하시고,<br/>
    기타 소모품(휴지,샴푸 등)과 경조사비나 교통비를 별도로 계산하셔서 <br/>
    1년정도 견적을 잡으시면 대략적인 소요비용이 나옵니다. <br/><br/>
    
    보통 자취를 하게되면 <br/>        
    자린고비처럼 살아갈 때 월 60~80정도가 지출되고,<br/>
    그래도 맛있는것좀 먹으면서 몇번씩 외식하면 80~120정도가 지출됩니다.<br/><br/>

    1년 과정에서 집에서 공부하는 것과 <br/>
    자취하며 공부하는 비용 차이가 <br/>
    약 800~1000만원정도 됩니다.<br></br>
                </div>
        </div>
        {isMobile?<div><Content2></Content2><Content3></Content3></div>:<div></div>}
        <Footer></Footer>
    </>)
}
 