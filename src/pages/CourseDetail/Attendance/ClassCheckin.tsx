/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Table } from 'antd'
import dayjs from 'dayjs'
import { classesList } from '~/types/classLists.type'
import { StudentCheckin} from '~/types/student.type'
import { AlignType, FixedType } from 'rc-table/lib/interface';
import { useMutation } from '@tanstack/react-query';
import classDeltailApi from '~/apis/classDetail.api';

interface Props {
  classesList: classesList[]
  studentList: StudentCheckin[]
}
export default function ClassCheckIn({ classesList, studentList }: Props) {
  const updateCheckin = (studentId: number, status: any, check:boolean, classId: number) => {
    console.log([studentId, status])
    if (check) {
      useMutation({
        mutationFn: () => classDeltailApi.updateStudentCheckin({
          student_id: studentId,
          class_id: classId,
          status: status
        })
      })
    }
    else {
      useMutation({
        mutationFn: () => classDeltailApi.postStudentCheckin({
          student_id: studentId,
          class_id: classId,
          status: status
        })
      })
    }
  }
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', fixed: 'left' as FixedType, width: 40 },
    { title: 'Họ tên', dataIndex: 'name', key: 'name', fixed: 'left' as FixedType, width: 200 },
    { title: 'Ngày sinh', dataIndex: 'dob', key: 'dob', fixed: 'left' as FixedType, width: 120 },
    { title: 'Ghi chú', dataIndex: 'note', key: 'note', fixed: 'left' as FixedType, width: 80 },
    ...classesList.map((session) => {
      const isToday = session.date === dayjs().format('YYYY-MM-DD')
      return {
        title: session.name,
        dataIndex: ['checkin'],
        key: session.id,
        width: 60,
        align: 'center' as AlignType,
        render: (text: any[], record: StudentCheckin) => {
          const sessionCheck = text.find((ses: classesList) => (ses.id === session.id)) || null
          // const [status, setStatus] = useState<string|null>(sessionCheck.status || null)
          return isToday ?
            <Select
              showSearch
              options={[
                { value: '1' },
                { value: 'M' },
                { value: '0' },
                { value: 'P' },
              ]}
              defaultValue={sessionCheck?.status || null}
              onChange={(value) => {
                const check = sessionCheck !== null
                updateCheckin(record.student_id, value, check, session.id)
              }}
              popupMatchSelectWidth={false}
              style={{
                padding:'0'
              }}
              size={'small'}
              bordered={false}
              suffixIcon={<></>}
            ></Select>
            : <span>{sessionCheck?.status || null}</span>;
        },
      }
    })
  ]
  return (
    <>
      <div className='page-content-title'>
        Điểm danh đi học
        <small>(Chỉ điểm danh trong khoảng từ khi buổi học bắt đầu đến khi buổi học kết thúc được 5 tiếng)</small>
      </div>
      <div className='page-content-note'>
        <span className='item'>Đi học: 1</span>
        <span className='item'>
          Đi muộn: <span style={{ color: 'yellow' }}>M</span>
        </span>
        <span className='item'>Nghỉ học: 0</span>
        <span className='item'>Nghỉ phép: P</span>
      </div>
      <Table 
        dataSource={studentList} 
        columns={columns}
        bordered={true} 
        scroll={{ x: 1500, y: 300 }}>
      </Table>
    </>
  )

}
