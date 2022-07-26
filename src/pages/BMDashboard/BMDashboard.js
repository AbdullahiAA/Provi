import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import StatsCard from "../../components/StatsCard/StatsCard";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../../components/Tables/ScrolledTable";

function BMDashboard() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
      {
        id: "#3345567",
        username: "Achiever Preye Odudu",
        email: "achiever.p,o@gmail.com",
        phoneNo: "08166789900",
        accNum: "2033 **** **** 8899",
        expiringDate: "20/25",
      },
    ]);
  }, []);

  return (
    <PageLayout pageTitle="Dashboard">
      <StatsCard
        data={[
          { title: "Total Request", total: "350" },
          { title: "Total Card Printed", total: "12,304" },
          { title: "Current Blank Card", total: "73" },
        ]}
      />
      {tableData.length > 0 && (
        <ScrolledTable>
          <ScrolledTableHead>
            <th>Id #</th>
            <th>Username</th>
            <th>Email</th>
            <th>phone number</th>
            <th>Account number</th>
            <th>Expiring Date</th>
          </ScrolledTableHead>

          <ScrolledTableBody>
            {tableData?.map((row, key) => (
              <tr
                key={key}
                className="odd:bg-siblack odd:bg-opacity-6 even:hover:bg-white odd:hover:bg-siblack odd:hover:bg-opacity-6"
              >
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.phoneNo}</td>
                <td>{row.accNum}</td>
                <td>{row.expiringDate}</td>
              </tr>
            ))}
          </ScrolledTableBody>
        </ScrolledTable>
      )}
    </PageLayout>
  );
}

export default BMDashboard;
