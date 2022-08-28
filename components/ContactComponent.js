import React,{Component} from "react";
import {Card,Text} from 'react-native-elements';

class RenderContact extends Component{
    render(){
        return(
            <Card>
                <Card.Title>Contact Information </Card.Title>
                <Card.Divider/>
                <Text>338 Nguyễn Văn Quá</Text>
                <Text>Hồ Chí Minh</Text>
                <Text>Tel: +852 1234 5678</Text>
                <Text>Fax: +852 8765 4321</Text>
                <Text>Email:tridung2156@gmail.com</Text>
            </Card>
        );
    }
}

class Contact extends Component{
    render(){
        return(
            <RenderContact/>
        );
    }
}

export default Contact