import { RatingDTO } from '@/data/rating/dto/rating.dto';
import { GENDER } from '@/utils/enum/common.enum';

export const RatingData: RatingDTO[] = [
  {
    id: 1,
    driverName: 'Nguyễn Văn Thái',
    phoneNumber: '0123456789',
    email: 'vanthai@gmail.com',
    gender: GENDER.MALE,
    rating: 4.5,
    content: 'Tài xế rất thân thiện và nhiệt tình. Chuyến đi rất thoải mái.',
  },
  {
    id: 2,
    driverName: 'Trần Thị Mai',
    phoneNumber: '0987654321',
    email: 'thimai92@gmail.com',
    gender: GENDER.FEMALE,
    rating: 4.8,
    content: 'Chị tài xế lái xe cẩn thận, đúng giờ, rất đáng tin cậy.',
  },
  {
    id: 3,
    driverName: 'Lê Hoàng Nam',
    phoneNumber: '0912345678',
    email: 'hoangnam.le@gmail.com',
    gender: GENDER.MALE,
    rating: 4.2,
    content: 'Tài xế vui tính, nhưng xe hơi cũ, cần cải thiện.',
  },
  {
    id: 4,
    driverName: 'Phạm Thị Lan',
    phoneNumber: '0934567890',
    email: 'lanpham94@gmail.com',
    gender: GENDER.FEMALE,
    rating: 5.0,
    content: 'Dịch vụ tuyệt vời, tài xế nhiệt tình, xe sạch sẽ.',
  },
  {
    id: 5,
    driverName: 'Đỗ Văn Hùng',
    phoneNumber: '0978123456',
    email: 'hungdo88@gmail.com',
    gender: GENDER.MALE,
    rating: 3.8,
    content: 'Tài xế ổn, nhưng hay nói chuyện điện thoại khi lái.',
  },
  {
    id: 6,
    driverName: 'Hoàng Thị Ngọc',
    phoneNumber: '0945678901',
    email: 'ngochoang@gmail.com',
    gender: GENDER.FEMALE,
    rating: 4.7,
    content: 'Chuyến đi suôn sẻ, tài xế thân thiện và chuyên nghiệp.',
  },
  {
    id: 7,
    driverName: 'Vũ Minh Tuấn',
    phoneNumber: '0901234567',
    email: 'minhtuan.vu@gmail.com',
    gender: GENDER.MALE,
    rating: 4.0,
    content: 'Tài xế khá tốt, nhưng đến trễ 10 phút.',
  },
  {
    id: 8,
    driverName: 'Nguyễn Thị Hương',
    phoneNumber: '0967891234',
    email: 'huongnt@gmail.com',
    gender: GENDER.FEMALE,
    rating: 4.9,
    content: 'Rất hài lòng, tài xế nhẹ nhàng và chu đáo.',
  },
  {
    id: 9,
    driverName: 'Trương Văn Long',
    phoneNumber: '0923456789',
    email: 'longtruong@gmail.com',
    gender: GENDER.MALE,
    rating: 3.5,
    content: 'Tài xế hơi nóng tính, cần cải thiện thái độ.',
  },
  {
    id: 10,
    driverName: 'Bùi Thị Thanh',
    phoneNumber: '0956781234',
    email: 'thanhbui95@gmail.com',
    gender: GENDER.FEMALE,
    rating: 4.6,
    content: 'Tài xế vui vẻ, xe thoải mái, sẽ chọn lại lần sau.',
  },
];
