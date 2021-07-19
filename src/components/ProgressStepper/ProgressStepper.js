import { Steps, Popover } from "antd";

const { Step } = Steps;

// const customDot = (dot, { status, index }) => (
//   <Popover
//     content={
//       <span>
//         step {index} status: {status}
//       </span>
//     }
//   >
//     {dot}
//   </Popover>
// );

function ProgressStepper() {
  return (
        // <Steps current={1}>
        //   <Steps current={1} progressDot={customDot}>
        //   <Step title="Step 1" description="Select Room" />
        //   <Step title="Step 2" subTitle="75% Left" description="Guest Details" />
        //   <Step title="Step 3" description="Payment" />
        // </Steps> 
        <ul id="progressbar">
          <li className="active"><div className="stepfill"><span className="step--comn">Step 1</span><span className="step-title">Select Room</span></div></li>
          <li><div className="stepfill"><span className="step--comn">Step 2</span><span className="step-title">Guest Details</span></div></li>
          <li><div className="stepfill"><span className="step--comn">Step 3</span><span className="step-title">Payment</span></div></li>
        </ul>
  );
}

export default ProgressStepper;
