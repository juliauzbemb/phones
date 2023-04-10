export default function clearPhone(phone) {
  phone = phone.replace(/[\s-()]/g, '');
  phone = phone.replace(/^8/, '+7');
  return phone;
}
