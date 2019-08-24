import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class OrgDetails extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <Card
                        hoverable
                        style={{ width: '80%', marginTop:'40px' }}
                        cover={<img alt="example" style={{width:240, float:'left', padding: '50px 20px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <div style={{marginTop:'26px', width:'75%', height:250, display: 'inline-block', textAlign:'left'}}>
                            <h1 style={{fontSize:'24px'}}>Bandejovis</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac ultrices nisi. In nec blandit nibh, ut malesuada est. Nulla facilisi. Praesent ut justo suscipit, consectetur lorem auctor, blandit nisl. Donec dapibus dolor quis massa maximus fermentum. Nunc pharetra orci velit, sit amet sodales mi accumsan non. Fusce tempor, sapien eget convallis auctor, tortor nunc tincidunt ligula, ac rutrum ante mi vitae lectus. Nam nec euismod est. Maecenas accumsan id dui non dignissim. Etiam eu nulla ac lectus lacinia ultricies a nec turpis. Maecenas ac diam felis.Etiam dictum in felis vitae porttitor. Nulla nec imperdiet erat. Fusce porttitor odio vel euismod tincidunt. Cras tincidunt efficitur ex venenatis bibendum. Fusce sed purus enim. In sit amet laoreet massa. Ut ultricies euismod purus eu tincidunt. Pellentesque hendrerit hendrerit volutpat. Pellentesque ac suscipit risus, nec pellentesque leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        </div>
                        
                    </Card>
                </center>
            </div>
        );
    }
}

export default OrgDetails;