export function vnd(price) {
    return String(price).replace(/(.)(?=(\d{3})+$)/g, "$1.") + " VNĐ";
}
