import { Button } from "@mui/material";
import { useCallback } from "react";
import { RequestPayParams, RequestPayResponse } from "iamport-typings";
import Head from "next/head";

const Certification = () => {
  const onClick = () => {
    const { IMP } = window;
    console.log(IMP);

    if (IMP) {
      IMP.init(process.env.NEXT_PUBLIC_IAMPORT_CODE as string);
      const data = {
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        company: "아임포트", // 회사명 또는 URL
        carrier: "SKT", // 통신사
        name: "홍길동", // 이름
        phone: "01012341234", // 전화번호
      };
      IMP.certification(data, callback);
    }
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("본인인증 성공");
    } else {
      alert(`본인인증 실패: ${error_msg}`);
    }
  }
  return (
    <>
      <div>
        <Button onClick={onClick}>인증하기</Button>
      </div>
    </>
  );
};

export default Certification;
