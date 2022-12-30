import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

export const infoDetailData = [
	{
		text: 'Toronto ON',
		url: 'https://www.google.com/maps/place/Toronto,+ON/@43.717899,-79.6582408,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843',
		icon: () => <FaMapMarkerAlt size={15} />,
	},
	{
		text: '+1 (647) 448-5732',
		url: 'tel:6474485732',
		icon: () => <FaPhoneAlt size={13} />,
	},

	{
		text: 'jay.zalischi@gmail.com',
		url: 'mailto:jay.zalischi@gmail.com',
		icon: () => <GrMail size={15} />,
	},
];

export const mapCoordinates = {
	lng: -79.3832,
	lat: 43.6952,
};
