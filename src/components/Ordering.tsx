import React from "react";
import Provinces from '../assets/svg/new/knowus/CNDprovinces.svg'

const Ordering = () => {
  return (
    <div>
      <div>

        <div>
          <p>How your order works</p>
          <p>Let's get your started</p>
        </div>

        <div>
            <div>
                <p>We aim to provide The Best Customer Experience</p>
                <div>
                    <div>
                        Place your Order
                    </div>

                    <div>
                        Receive a Confirmation Email
                    </div>

                    <div>
                        Receive Product Tracking Details
                    </div>

                    <div>
                        Get Product to your Door step
                    </div>
                </div>
            </div>

            <div>
                <p>We are  delighted to let you know</p>
                <p>I m ck</p>
                <div className="w-[40px] h-[40px]" style={{backgroundImage: `url(${Provinces})`}}>
                </div>
            </div>

            <div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Ordering;
