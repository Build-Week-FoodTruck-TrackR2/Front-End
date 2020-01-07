import React from 'react';
import styled from 'styled-components';
import { Typography, Divider, Box, Avatar } from '@material-ui/core';
import { Rating  } from '@material-ui/lab';
import standIn from '../../images/foodArt.jpg';

const Container = styled.section`


    div {

        display: flex;
        margin-top: 3%
        margin-left: 2.5%;
        margin-right: 2.5%;
        justify-content: space-between;

        div {

            display: flex;
            flex-flow: column;
            align-items: center;
        }

    }

    #review-content {

        margin: 3% 5%;
    }


`;


const ReviewList= (props) => {

    return(<Container>

        <div>
            <div>
                <Avatar alt="avatar" src={standIn} />
                <Typography variant="caption" noWrap={true} >{props.review.user}</Typography>
            </div>
            <div>
                <Typography variant="caption">{props.review.reviewDate}</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating size="small" name="read-only" value={props.review.rating} readOnly />
                </Box>
                
            </div>
        </div>
        <Divider variant="middle"/>
        <Typography id="review-content">{props.review.reviewContent}</Typography>
    </Container>);
}

export default ReviewList;