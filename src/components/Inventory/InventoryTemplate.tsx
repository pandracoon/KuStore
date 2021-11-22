import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import InventoryTable from './InventoryTable';

const InventoryTemplateBlock = styled.div`
  width: 512px;
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

type InventoryData = {
  it_id: number;
  it_name: string;
  storage: number;
};

const InventoryTemplate = (): ReactElement => {
  const column = ['ID', '이름', '재고'];

  const state = useState<InventoryData[]>([
    {
      it_id: 0,
      it_name: '',
      storage: 0,
    },
  ]);

  const tableData: InventoryData[] = state[0];
  const setTableData = state[1];

  useEffect(() => {
    const fetchInventoryList = async (): Promise<number> => {
      try {
        const url = `http://localhost:31413/inventory`;
        console.log(url);
        const res = await axios.get(url);
        const resData = res.data as InventoryData[];

        setTableData(resData);
        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchInventoryList();
    console.log(a);
  }, []);

  return (
    <InventoryTemplateBlock>
      <div className="header">
        주문에 의해 재고가 부족할 시 자동으로 여유재고 10개를 같이 구매합니다.
      </div>
      <InventoryTable columns={column} data={tableData} />
    </InventoryTemplateBlock>
  );
};

export default InventoryTemplate;
