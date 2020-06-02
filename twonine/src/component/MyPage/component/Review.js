import React, { useState } from 'react';
import './Review.css';
import CanWrite from './Review/CanWrite';
import MyReview from './Review/MyReview';

const Review = () => {
    const [ reveiwTab , setReviewTab ] = useState(1);

    return (
        <div>
            <div className="reviewTab">
                <li className={reveiwTab === 1 ? 'setReviewTab' : ''} onClick={() => setReviewTab(1)}>작성 가능한 리뷰 (0)</li>
                <li className={reveiwTab === 2 ? 'setReviewTab' : ''} onClick={() => setReviewTab(2)}>내 리뷰 (0))</li>
            </div>
            <div className="wrapItems">
                { reveiwTab === 1 && (
                    <div className="reveiwTabBox">
                        <CanWrite/>
                    </div>
                )}
                { reveiwTab === 2 && (
                    <div className="reveiwTabBox">
                        <MyReview/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Review;
