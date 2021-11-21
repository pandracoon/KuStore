import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import MemberTable from './MemberTable';

const MemberTemplateBlock = styled.div`
  width: 1000px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
  }
`;

type MemberData = {
  me_id: number;
  name: string;
  phone: string;
  date: string;
};

type MemberTableData = {
  me_id: number;
  name: string;
  phone: string;
  date: string;
  detail: string;
};

const parsingDate = (date: string) => {
  return date.split('T')[0];
};

const MemberTemplate = (): ReactElement => {
  const column = ['ID', '이름', '전화번호', '가입일자', '상세보기'];

  const stateTable = useState<MemberTableData[]>([
    {
      me_id: 0,
      name: '',
      phone: '',
      date: '',
      detail: '',
    },
  ]);
  const tableData: MemberTableData[] = stateTable[0];
  const setTableData = stateTable[1];
  const temp = [];

  const [typeWord, setTypeWord] = useState(``);
  const [keyword, setKeyword] = useState(``);

  useEffect(() => {
    const fetchMemeberList = async (): Promise<number> => {
      try {
        const url = keyword
          ? `http://localhost:31413/member/search?name=${keyword}`
          : `http://localhost:31413/member`;
        console.log(url);
        const res = await axios.get(url);
        const resData = res.data as MemberData[];

        resData.forEach((data) => {
          const url = `./detail/${data.me_id}`;
          const det = { detail: url };
          const obj = Object.assign(data, det);
          Object.assign(obj, { date: parsingDate(obj.date) });
          temp.push(obj);
        });

        setTableData(temp);
        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchMemeberList();
  }, [keyword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeWord(e.target.value);
  };

  const onClick = () => {
    setKeyword(typeWord);
  };

  return (
    <MemberTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>추가하기</p>
        </Button>
        <Button disabled={false} func={onClick}>
          <p>검색하기</p>
        </Button>
        <input
          onChange={onChange}
          placeholder="이름을 완전히 입력하세요"
          value={typeWord}
        />
      </div>
      <MemberTable columns={column} data={tableData} />
    </MemberTemplateBlock>
  );
};

export default MemberTemplate;
