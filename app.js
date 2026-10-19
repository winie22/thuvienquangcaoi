/* =====================================================
   WINIE – Thư viện Mẫu Quảng cáo Sáng tạo (Nhóm 14)
   Cấu trúc file:
   1. DỮ LIỆU MẪU      4. CÁC GIAO DIỆN (views)
   2. TRẠNG THÁI       5. XỬ LÝ SỰ KIỆN
   3. HÀM HỖ TRỢ       6. ĐIỀU HƯỚNG + HIỆU ỨNG
   ===================================================== */

/* ---------- 1. DỮ LIỆU MẪU ----------
   Muốn thêm ảnh: bỏ ảnh cùng thư mục với index.html rồi thêm 1 dòng vào mảng items.
   Mẫu không có "img" sẽ tự vẽ poster màu pastel theo "bg". */
const DEFAULT = {
  cats: ['Mỹ phẩm', 'Đồ uống', 'Thực phẩm', 'Thời trang'],
  users: [
    { email: 'tv@demo.vn',  pass: '123', name: 'Mai Thành Viên', role: 'member',  locked: false },
    { email: 'nst@demo.vn', pass: '123', name: 'Bin Sáng Tạo',   role: 'creator', locked: false },
    { email: 'kd@demo.vn',  pass: '123', name: 'Lam Kiểm Duyệt', role: 'mod',     locked: false },
    { email: 'qt@demo.vn',  pass: '123', name: 'Admin Winie',      role: 'admin',   locked: false },
  ],
  items: [
    { id: 1, title: 'Babé – Mùa hè đã hơn',    cat: 'Mỹ phẩm',   type: 'Poster',     style: '3D vui nhộn', color: 'Xanh lá',  img: 'babe.jpeg',     by: 'Bin Sáng Tạo', status: 'approved', views: 120, saves: 14, tags: ['mùa hè', '3D'],     desc: 'Poster sữa rửa mặt với phông chữ bọt xốp và phao bơi xanh lá.' },
    { id: 2, title: 'Red Bull – Sạc năng lượng', cat: 'Đồ uống',   type: 'Poster',     style: 'Ý tưởng chơi chữ', color: 'Xanh dương', img: 'redbull.jpeg',  by: 'Bin Sáng Tạo', status: 'approved', views: 340, saves: 52, tags: ['sáng tạo', 'pin'],  desc: 'Lon nước tăng lực biến thành cục pin – thông điệp "Charge your energy".' },
    { id: 3, title: 'Tâm Sắc Tâm – Dầu gội bưởi', cat: 'Mỹ phẩm',  type: 'Banner',     style: 'Tươi mát',    color: 'Xanh lá',  img: 'tamsactam.jpeg', by: 'Bin Sáng Tạo', status: 'approved', views: 88,  saves: 9,  tags: ['thiên nhiên'],      desc: 'Banner ngang dầu gội bưởi không sulfate, dải kem uốn lượn.' },
    { id: 4, title: 'Cocoon – Nước tẩy trang 1 lít', cat: 'Mỹ phẩm', type: 'Poster',   style: 'Tối giản',    color: 'Cam nâu',  img: 'cocoon.jpeg',    by: 'Bin Sáng Tạo', status: 'approved', views: 210, saves: 31, tags: ['size lớn', 'mới'],  desc: 'Cô gái ôm chai khổng lồ tạo hiệu ứng tỉ lệ bất ngờ.' },
    { id: 5, title: 'Your new Obsession – Donut', cat: 'Thực phẩm', type: 'Mạng xã hội', style: 'Sang trọng', color: 'Nâu kem', img: 'donut.jpeg',     by: 'Bin Sáng Tạo', status: 'approved', views: 175, saves: 27, tags: ['bánh', 'cafe'],     desc: 'Bố cục chéo nâu – kem, chú thích từng vị bánh bằng đường kẻ mảnh.' },
    { id: 6, title: 'Lay\'s – Taste the Ocean Crisp', cat: 'Thực phẩm', type: 'Poster', style: 'Siêu thực', color: 'Xanh dương', img: 'lays.jpeg',     by: 'Bin Sáng Tạo', status: 'approved', views: 260, saves: 40, tags: ['biển', 'snack'],    desc: 'Đuôi tôm xếp từ những lát khoai chiên giữa bãi biển nắng.' },
    { id: 7, title: 'Nescafé Caramel Macchiato', cat: 'Đồ uống',   type: 'Poster',     style: 'Hiện đại',    color: 'Xanh dương', img: 'nescafe.jpeg',   by: 'Bin Sáng Tạo', status: 'approved', views: 143, saves: 18, tags: ['cà phê', 'giá rẻ'], desc: 'Lon cà phê phủ giọt nước, chữ lớn đè sau sản phẩm, nhãn giá 7K.' },
    { id: 8, title: '9 Wishes – Routine da căng bóng', cat: 'Mỹ phẩm', type: 'Mạng xã hội', style: 'Pastel', color: 'Xanh dương', img: '9wishes.jpeg',  by: 'Bin Sáng Tạo', status: 'approved', views: 199, saves: 25, tags: ['skincare', 'hồ bơi'], desc: 'Bộ ảnh ghép lớn – nhỏ giới thiệu 3 sản phẩm theo routine.' },
    { id: 13, title: 'Kem dưỡng bạc hà (chờ duyệt)', cat: 'Mỹ phẩm', type: 'Banner', style: 'Pastel', color: 'Xanh mint', bg: 'linear-gradient(160deg,#c8f1e2,#cde7ff)', by: 'Bin Sáng Tạo', status: 'pending', views: 0, saves: 0, tags: ['kem'], desc: 'Mẫu đang chờ Kiểm duyệt viên xem.' },
  ],
  favs: {},   // { email: [id, id...] }
  cmts: [
    { id: 1, item: 2, by: 'Mai Thành Viên', star: 5, text: 'Ý tưởng pin quá thông minh, nhìn là nhớ liền!' },
  ],
};

const ROLE_NAME = { member: 'Thành viên', creator: 'Nhà sáng tạo', mod: 'Kiểm duyệt viên', admin: 'Quản trị viên' };
const TYPES = ['Poster', 'Banner', 'Mạng xã hội', 'Video'];
const STATUS = { pending: 'Chờ duyệt', approved: 'Đã duyệt', rejected: 'Bị từ chối' };

/* ---------- 2. TRẠNG THÁI (lưu bằng localStorage) ---------- */
const KEY = 'winie14';
let S;
try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
if (!S) S = { ...structuredClone(DEFAULT), me: null };
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Bộ nhớ trình duyệt đầy (ảnh quá lớn?)'); } };

/* ---------- 3. HÀM HỖ TRỢ ---------- */
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
const approved = () => S.items.filter(i => i.status === 'approved');
const myFavs = () => (S.me ? S.favs[S.me.email] || [] : []);
const avg = id => { const c = S.cmts.filter(x => x.item === id && x.star); return c.length ? (c.reduce((a, b) => a + b.star, 0) / c.length).toFixed(1) : '–'; };
const opts = (arr, sel = '') => arr.map(o => `<option ${o === sel ? 'selected' : ''}>${o}</option>`).join('');

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

// Tách từng từ để chạy hiệu ứng hiện chữ
const split = t => t.split(' ').map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(' ');

// Khung ảnh cố định cho thẻ (mọi thẻ cao bằng nhau, ảnh không bị cắt)
const thumb = i => i.img
  ? `<div class="thumb" style="--bg:url('${i.img.startsWith('data:') ? i.img : i.img}')">${pic(i)}</div>`
  : pic(i);

// Ảnh của mẫu: ảnh thật hoặc poster tự vẽ
const pic = i => i.img
  ? `<img src="${i.img.startsWith('data:') ? i.img : i.img}" alt="${i.title}">`
  : `<div class="gen" style="background:${i.bg}">${i.title}</div>`;

const card = i => `
  <a class="card reveal" href="#/mau/${i.id}">
    ${thumb(i)}
    <button class="heart ${myFavs().includes(i.id) ? 'on' : ''}" data-act="fav" data-id="${i.id}" title="Lưu vào bộ sưu tập">♥</button>
    <div class="info"><h3>${i.title}</h3><span class="chip">${i.cat}</span><span class="chip">${i.type}</span></div>
  </a>`;

const grid = list => list.length ? `<div class="grid">${list.map(card).join('')}</div>`
  : `<div class="box"><h3>Không tìm thấy mẫu phù hợp</h3></div>`;

/* ---------- 4. CÁC GIAO DIỆN (mỗi hàm = 1 màn hình) ---------- */
const VIEWS = {

  // 4.1.1 Trang chủ
  home() {
    const words = ['Poster', 'Banner', 'Mạng xã hội', 'Video', 'Mỹ phẩm', 'Đồ uống', 'Thực phẩm', 'Thời trang'];
    const run = words.concat(words).map(w => `✦ ${w} `).join('&nbsp;&nbsp;');
    return `
      <section class="hero">
        <span class="badge">Thư viện mẫu quảng cáo</span>
        <h1>${split('Mẫu quảng cáo')} <em>${split('sáng tạo')}</em>,<br>${split('sẵn sàng để lấy cảm hứng')}</h1>
        <p>Tìm kiếm, lưu bộ sưu tập và chia sẻ các mẫu poster, banner, bài đăng mạng xã hội từ nhiều ngành hàng.</p>
        <form class="searchbar" data-form="quick"><input name="q" placeholder="Tìm: kem chống nắng, trà sữa, banner..."><button class="btn">Tìm</button></form>
        <div class="stats-row">
          <div><b data-count="${approved().length}">0</b><span>Mẫu quảng cáo</span></div>
          <div><b data-count="${approved().reduce((a, i) => a + i.views, 0)}">0</b><span>Lượt xem</span></div>
          <div><b data-count="${approved().reduce((a, i) => a + i.saves, 0)}">0</b><span>Lượt lưu</span></div>
        </div>
      </section>
      <div class="marquee"><div>${run}&nbsp;&nbsp;${run}</div></div>
      <h2 class="page-title">Danh mục</h2>
      <p>${S.cats.map(c => `<button class="btn sm lav" data-act="cat" data-id="${c}">${c}</button>`).join(' ')}</p>
      <h2 class="page-title" style="margin-top:30px">Mẫu mới nhất</h2>
      ${grid(approved().slice().sort((a, b) => b.id - a.id).slice(0, 4))}
      <h2 class="page-title" style="margin-top:20px">Mẫu nổi bật</h2>
      ${grid(approved().slice().sort((a, b) => b.views - a.views).slice(0, 4))}`;
  },

  // 4.1.2 Đăng ký
  register() {
    return `<form class="box narrow" data-form="register">
      <h2>Tạo tài khoản</h2>
      <label>Họ tên</label><input name="name" placeholder="Nguyễn Văn A">
      <label>Email</label><input name="email" placeholder="ban@email.com">
      <label>Mật khẩu</label><input name="pass" type="password" placeholder="Ít nhất 6 ký tự">
      <p style="margin-top:18px"><button class="btn mint">Đăng ký</button></p></form>`;
  },

  // 4.1.3 Đăng nhập (dùng chung cho 4 vai trò)
  login() {
    const quick = S.users.map(u => `<button type="button" class="btn sm lav" data-act="fill" data-id="${u.email}">${ROLE_NAME[u.role]}</button>`).join(' ');
    return `<form class="box narrow" data-form="login">
      <h2>Chào mừng trở lại</h2>
      <label>Email</label><input name="email" id="le" placeholder="tv@demo.vn">
      <label>Mật khẩu</label><input name="pass" id="lp" type="password" placeholder="123">
      <p style="margin-top:18px"><button class="btn">Đăng nhập</button></p>
      <p class="muted" style="margin-top:16px">Tài khoản thử nhanh (mật khẩu 123):</p><p>${quick}</p></form>`;
  },

  // 4.1.4 Tìm kiếm & lọc
  search() {
    const f = VIEWS.filter;
    const all = approved();
    const uniq = k => ['Tất cả', ...new Set(all.map(i => i[k]))];
    let list = all.filter(i =>
      (!f.q || (i.title + i.tags.join(' ') + i.desc).toLowerCase().includes(f.q.toLowerCase())) &&
      (f.cat === 'Tất cả' || i.cat === f.cat) && (f.type === 'Tất cả' || i.type === f.type) &&
      (f.style === 'Tất cả' || i.style === f.style) && (f.color === 'Tất cả' || i.color === f.color));
    if (f.sort === 'Xem nhiều') list.sort((a, b) => b.views - a.views);
    if (f.sort === 'Lưu nhiều') list.sort((a, b) => b.saves - a.saves);
    return `<h2 class="page-title">Tìm kiếm mẫu quảng cáo</h2>
      <form class="box" data-form="filter"><div class="row">
        <div><label>Từ khóa</label><input name="q" value="${f.q}" placeholder="Nhập từ khóa..."></div>
        <div><label>Ngành hàng</label><select name="cat">${opts(['Tất cả', ...S.cats], f.cat)}</select></div>
        <div><label>Loại quảng cáo</label><select name="type">${opts(['Tất cả', ...TYPES], f.type)}</select></div>
        <div><label>Phong cách</label><select name="style">${opts(uniq('style'), f.style)}</select></div>
        <div><label>Màu chủ đạo</label><select name="color">${opts(uniq('color'), f.color)}</select></div>
        <div><label>Sắp xếp</label><select name="sort">${opts(['Mới nhất', 'Xem nhiều', 'Lưu nhiều'], f.sort)}</select></div>
      </div><p style="margin-top:14px"><button class="btn">Lọc kết quả</button></p></form>
      <p style="margin:18px 0">Tìm thấy <b>${list.length}</b> mẫu</p>${grid(list)}`;
  },
  filter: { q: '', cat: 'Tất cả', type: 'Tất cả', style: 'Tất cả', color: 'Tất cả', sort: 'Mới nhất' },

  // 4.1.5 + 4.1.6 Chi tiết mẫu, bình luận & đánh giá
  mau(id) {
    const i = S.items.find(x => x.id == id);
    if (!i) return `<div class="box">Không tìm thấy mẫu.</div>`;
    if (!VIEWS.seen) VIEWS.seen = {};
    if (!VIEWS.seen[id]) { i.views++; VIEWS.seen[id] = 1; save(); }
    const cs = S.cmts.filter(c => c.item == id).map(c => `
      <div class="cmt"><b>${c.by}</b> ${'★'.repeat(c.star || 0)}<br>${c.text}
      ${S.me && S.me.name === c.by ? `<br><button class="btn sm" data-act="editCmt" data-id="${c.id}">Sửa</button> <button class="btn sm" data-act="delCmt" data-id="${c.id}">Xóa</button>` : ''}</div>`).join('') || '<p class="muted">Chưa có bình luận.</p>';
    const related = approved().filter(x => x.id != id && (x.cat === i.cat || x.tags.some(t => i.tags.includes(t)))).slice(0, 4);
    return `<div class="detail">
      <div class="pic">${pic(i)}</div>
      <div><h1>${i.title}</h1>
        <p style="margin:10px 0">${i.desc}</p>
        <p><span class="chip">${i.cat}</span><span class="chip">${i.type}</span><span class="chip">${i.style}</span><span class="chip">${i.color}</span>${i.tags.map(t => `<span class="chip">#${t}</span>`).join('')}</p>
        <p style="margin:12px 0">👤 ${i.by} · 👁 ${i.views} lượt xem · ♥ ${i.saves} lượt lưu · ⭐ ${avg(i.id)}</p>
        <button class="btn" data-act="fav" data-id="${i.id}">${myFavs().includes(i.id) ? '♥ Đã lưu' : '♡ Lưu vào bộ sưu tập'}</button>
        <h3 style="margin-top:26px">Bình luận & đánh giá</h3>${cs}
        <p style="margin-top:14px"><a class="btn mint" href="#/danh-gia/${i.id}">Viết bình luận & đánh giá</a></p></div></div>
      <h2 class="page-title" style="margin-top:40px">Mẫu liên quan</h2>${grid(related)}`;
  },

  // 4.1.6 Giao diện bình luận và đánh giá mẫu
  danhgia(id) {
    const i = S.items.find(x => x.id == id);
    if (!i) return `<div class="box">Không tìm thấy mẫu.</div>`;
    const mine = S.cmts.filter(c => c.item == id && c.by === S.me.name).map(c => `
      <div class="cmt">${'★'.repeat(c.star || 0)}<br>${c.text}<br>
      <button class="btn sm" data-act="editCmt" data-id="${c.id}">Sửa</button> <button class="btn sm" data-act="delCmt" data-id="${c.id}">Xóa</button></div>`).join('') || '<p class="muted">Bạn chưa bình luận mẫu này.</p>';
    return `<h2 class="page-title">Bình luận & đánh giá mẫu</h2>
      <div class="detail"><div class="pic" style="max-width:380px">${pic(i)}</div>
      <div><h2>${i.title}</h2><p class="muted" style="margin:6px 0">Điểm trung bình: ★ ${avg(i.id)}</p>
        <form class="box" data-form="comment" data-id="${i.id}" style="margin:16px 0">
          <label>Số sao</label><select name="star">${[5, 4, 3, 2, 1].map(n => `<option value="${n}">${'★'.repeat(n)}</option>`).join('')}</select>
          <label>Nhận xét / bình luận</label><textarea name="text" rows="3" placeholder="Viết nhận xét của bạn..."></textarea>
          <p style="margin-top:14px"><button class="btn mint">Gửi</button> <a class="btn lav" href="#/mau/${i.id}">Quay lại mẫu</a></p></form>
        <h3>Bình luận & đánh giá của tôi</h3>${mine}</div></div>`;
  },

  // 4.1.7 Bộ sưu tập yêu thích
  fav() {
    const list = myFavs().map(id => S.items.find(i => i.id === id)).filter(Boolean);
    return `<h2 class="page-title">Bộ sưu tập yêu thích ♥</h2>${list.length ? grid(list) : '<div class="box">Bạn chưa lưu mẫu nào. Bấm ♥ trên thẻ mẫu để lưu!</div>'}`;
  },

  // 4.2.1 Đăng tải mẫu (có khung xem trước bên cạnh)
  upload() {
    return `<h2 class="page-title">Đăng tải mẫu quảng cáo</h2>
    <div class="upload-grid">
      <form class="box" data-form="upload">
        <label style="margin-top:0">Tiêu đề</label><input name="title">
        <label>Mô tả</label><textarea name="desc" rows="3"></textarea>
        <div class="row"><div><label>Loại quảng cáo</label><select name="type">${opts(TYPES)}</select></div>
        <div><label>Danh mục</label><select name="cat">${opts(S.cats)}</select></div></div>
        <label>Thẻ (cách nhau bằng dấu phẩy)</label><input name="tags" placeholder="mùa hè, pastel">
        <label>Tệp hình ảnh</label><input name="file" type="file" accept="image/*">
        <p style="margin-top:18px"><button class="btn mint">Gửi chờ kiểm duyệt</button></p>
      </form>
      <aside class="preview-wrap">
        <p class="muted" style="text-align:center">Xem trước mẫu của bạn</p>
        <div class="card">
          <div class="thumb pv-empty" id="pvThumb"><span>Ảnh bạn chọn<br>sẽ hiện ở đây</span></div>
          <div class="info"><h3 id="pvTitle">Tiêu đề mẫu của bạn</h3>
            <span class="chip" id="pvCat">${S.cats[0]}</span><span class="chip" id="pvType">${TYPES[0]}</span><span id="pvTags"></span></div>
        </div>
        <p class="muted" id="pvDesc" style="text-align:center"></p>
      </aside>
    </div>`;
  },

  // 4.2.2 Mẫu của tôi
  mine() {
    const rows = S.items.filter(i => i.by === S.me.name).map(i => `<tr>
      <td>${i.title}</td><td><span class="st ${i.status}">${STATUS[i.status]}</span>${i.reason ? `<br><small>Lý do: ${i.reason}</small>` : ''}</td>
      <td><button class="btn sm" data-act="editItem" data-id="${i.id}">Sửa</button> <button class="btn sm" data-act="delItem" data-id="${i.id}">Xóa</button></td></tr>`).join('');
    return `<h2 class="page-title">Mẫu quảng cáo của tôi</h2><table><tr><th>Tên mẫu</th><th>Trạng thái</th><th>Thao tác</th></tr>${rows}</table>`;
  },

  // 4.2.3 Thống kê
  stats() {
    const mine = S.items.filter(i => i.by === S.me.name && i.status === 'approved');
    const mv = Math.max(1, ...mine.map(i => i.views)), ms = Math.max(1, ...mine.map(i => i.saves));
    return `<h2 class="page-title">Thống kê mẫu của tôi</h2><div class="box">${mine.map(i => `
      <p><b>${i.title}</b></p>
      <div class="bar" data-w="${i.views / mv * 100}%"></div><small>👁 ${i.views} lượt xem</small>
      <div class="bar save" data-w="${i.saves / ms * 100}%"></div><small>♥ ${i.saves} lượt lưu</small><hr style="margin:12px 0;opacity:.2">`).join('')}</div>`;
  },

  // 4.3.1 Kiểm duyệt mẫu
  moderate() {
    const list = S.items.filter(i => i.status === 'pending');
    return `<h2 class="page-title">Kiểm duyệt mẫu quảng cáo</h2>${list.length ? list.map(i => `
      <div class="box row" style="margin-bottom:18px;align-items:center"><div style="max-width:160px;flex:none">${pic(i)}</div>
      <div><h3>${i.title}</h3><p>${i.desc}</p><p class="muted">Người đăng: ${i.by} · ${i.cat} · ${i.type}</p>
      <a class="btn sm sky" href="#/mau/${i.id}">Xem đầy đủ</a> <button class="btn sm mint" data-act="approve" data-id="${i.id}">✔ Duyệt</button> <button class="btn sm" data-act="reject" data-id="${i.id}">✖ Từ chối</button></div></div>`).join('')
      : '<div class="box">Không còn mẫu nào chờ duyệt</div>'}`;
  },

  // 4.3.2 Quản lý danh mục/thẻ
  tags() {
    return `<h2 class="page-title">Quản lý danh mục / thẻ</h2>
      <form class="box" data-form="tag" style="margin-bottom:18px"><div class="searchbar" style="margin:0;max-width:none"><input name="name" placeholder="Tên danh mục mới..."><button class="btn mint">Thêm</button></div></form>
      <table><tr><th>Tên</th><th>Số mẫu dùng</th><th>Thao tác</th></tr>${S.cats.map(c => `<tr><td>${c}</td><td>${S.items.filter(i => i.cat === c).length}</td>
      <td><button class="btn sm" data-act="editTag" data-id="${c}">Sửa</button> <button class="btn sm" data-act="delTag" data-id="${c}">Xóa</button></td></tr>`).join('')}</table>`;
  },

  // 4.3.3 Quản lý bình luận
  comments() {
    return `<h2 class="page-title">Quản lý bình luận</h2>${S.cmts.map(c => `<div class="cmt"><b>${c.by}</b> · ${(S.items.find(i => i.id === c.item) || {}).title}<br>${c.text}<br>
      <button class="btn sm" data-act="delCmt" data-id="${c.id}">Xóa vi phạm</button></div>`).join('') || '<div class="box">Chưa có bình luận.</div>'}`;
  },

  // 4.4.1 Quản lý tài khoản
  accounts() {
    return `<h2 class="page-title">Quản lý tài khoản</h2><table><tr><th>Họ tên</th><th>Email</th><th>Vai trò</th><th>Trạng thái</th><th>Thao tác</th></tr>${S.users.map(u => `<tr>
      <td>${u.name}</td><td>${u.email}</td>
      <td><select data-role="${u.email}">${['member', 'creator', 'mod'].map(r => `<option value="${r}" ${u.role === r ? 'selected' : ''}>${ROLE_NAME[r]}</option>`).join('')}${u.role === 'admin' ? `<option selected>${ROLE_NAME.admin}</option>` : ''}</select></td>
      <td><span class="st ${u.locked ? 'rejected' : 'approved'}">${u.locked ? 'Đã khóa' : 'Hoạt động'}</span></td>
      <td>${u.role === 'admin' ? '–' : `<button class="btn sm ${u.locked ? 'mint' : ''}" data-act="lock" data-id="${u.email}">${u.locked ? '🔓 Mở khóa' : '🔒 Khóa'}</button>`}</td></tr>`).join('')}</table>`;
  },
};

// Ai được vào trang nào (không ghi = ai cũng vào được)
const GUARD = {
  fav: ['member', 'creator'], danhgia: ['member', 'creator'], upload: ['creator'], mine: ['creator'], stats: ['creator'],
  moderate: ['mod'], tags: ['mod'], comments: ['mod'], accounts: ['admin'],
};

// Menu theo vai trò
function buildMenu() {
  const r = S.me && S.me.role;
  const L = [['/', 'Trang chủ'], ['/tim-kiem', 'Tìm kiếm']];
  if (!r) L.push(['/dang-nhap', 'Đăng nhập'], ['/dang-ky', 'Đăng ký']);
  if (r === 'member' || r === 'creator') L.push(['/yeu-thich', 'Bộ sưu tập']);
  if (r === 'creator') L.push(['/dang-tai', 'Đăng tải'], ['/mau-cua-toi', 'Mẫu của tôi'], ['/thong-ke', 'Thống kê']);
  if (r === 'mod') L.push(['/kiem-duyet', 'Kiểm duyệt'], ['/danh-muc', 'Danh mục/thẻ'], ['/binh-luan', 'Bình luận']);
  if (r === 'admin') L.push(['/tai-khoan', 'Tài khoản']);
  $('#menu').innerHTML = L.map(([h, t]) => `<a href="#${h}" class="${location.hash.slice(1) === h ? 'on' : ''}">${t}</a>`).join('')
    + (r ? `<span class="role-tag">${S.me.name} · ${ROLE_NAME[r]}</span><a href="#/" data-act="logout">Đăng xuất</a>` : '');
}

/* ---------- 5. XỬ LÝ SỰ KIỆN ---------- */
let lastClick = { x: 0, y: 0 };
function burst(x, y) {
  const cols = ['#ffd3e4', '#dccfff', '#c8f1e2', '#cde7ff', '#fff3b5'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('i'), a = Math.random() * 6.28, d = 40 + Math.random() * 60;
    s.className = 'spark'; s.style.cssText = `left:${x}px;top:${y}px;background:${cols[i % 5]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 850);
  }
}
const go = h => { location.hash = h; };
const ACT = {
  fav(id) {
    if (!S.me) { toast('Hãy đăng nhập để lưu mẫu'); return go('/dang-nhap'); }
    const it = S.items.find(i => i.id == id), l = S.favs[S.me.email] || (S.favs[S.me.email] = []);
    if (l.includes(it.id)) { l.splice(l.indexOf(it.id), 1); it.saves--; toast('Đã bỏ lưu'); }
    else { l.push(it.id); it.saves++; toast('Đã lưu vào bộ sưu tập'); burst(lastClick.x, lastClick.y); }
    save(); render();
  },
  fill(email) { $('#le').value = email; $('#lp').value = '123'; },
  logout() { S.me = null; save(); },
  approve(id) { S.items.find(i => i.id == id).status = 'approved'; save(); toast('Đã duyệt mẫu'); render(); },
  reject(id) {
    const r = prompt('Nhập lý do từ chối:'); if (!r) return toast('Cần nhập lý do từ chối');
    const it = S.items.find(i => i.id == id); it.status = 'rejected'; it.reason = r; save(); render();
  },
  delItem(id) { if (confirm('Xóa mẫu này?')) { S.items = S.items.filter(i => i.id != id); save(); render(); } },
  editItem(id) { const it = S.items.find(i => i.id == id), t = prompt('Tiêu đề mới:', it.title); if (t) { it.title = t; save(); render(); } },
  delCmt(id) { S.cmts = S.cmts.filter(c => c.id != id); save(); render(); },
  editCmt(id) {
    const c = S.cmts.find(x => x.id == id), t = prompt('Sửa nội dung:', c.text); if (!t) return;
    const s = +prompt('Sửa số sao (1-5):', c.star); c.text = t; if (s >= 1 && s <= 5) c.star = s; save(); render();
  },
  cat(name) { VIEWS.filter.cat = name; go('/tim-kiem'); },
  delTag(name) {
    const n = S.items.filter(i => i.cat === name).length;
    if (n && !confirm(`Danh mục đang được ${n} mẫu sử dụng. Vẫn xóa?`)) return;
    S.cats = S.cats.filter(c => c !== name); save(); render();
  },
  editTag(name) {
    const t = prompt('Tên mới:', name); if (!t || S.cats.includes(t)) return t && toast('Tên bị trùng');
    S.cats[S.cats.indexOf(name)] = t; S.items.forEach(i => { if (i.cat === name) i.cat = t; }); save(); render();
  },
  lock(email) { const u = S.users.find(x => x.email === email); u.locked = !u.locked; save(); render(); },
};

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  lastClick = { x: e.clientX, y: e.clientY };
  e.preventDefault(); e.stopPropagation(); ACT[b.dataset.act](b.dataset.id);
  if (b.dataset.act === 'logout') go('/');
});
document.addEventListener('change', e => {
  if (e.target.dataset.role) { S.users.find(u => u.email === e.target.dataset.role).role = e.target.value; save(); toast('Đã phân quyền'); }
});

// Cập nhật khung xem trước ở trang đăng tải
function updatePreview(f) {
  const el = f.elements, t = $('#pvThumb'); if (!t) return;
  $('#pvTitle').textContent = el.title.value || 'Tiêu đề mẫu của bạn';
  $('#pvCat').textContent = el.cat.value; $('#pvType').textContent = el.type.value;
  $('#pvDesc').textContent = el.desc.value;
  $('#pvTags').innerHTML = el.tags.value.split(',').map(x => x.trim()).filter(Boolean).map(x => `<span class="chip">#${x}</span>`).join('');
  const file = el.file.files[0];
  if (file && file.type.startsWith('image/')) {
    const u = URL.createObjectURL(file);
    t.className = 'thumb'; t.style.setProperty('--bg', `url('${u}')`); t.innerHTML = `<img src="${u}" alt="">`;
  } else { t.className = 'thumb pv-empty'; t.innerHTML = '<span>Ảnh bạn chọn<br>sẽ hiện ở đây</span>'; }
}
['input', 'change'].forEach(ev => document.addEventListener(ev, e => { const f = e.target.closest('[data-form="upload"]'); if (f) updatePreview(f); }));

const FORMS = {
  news(d, f) { if (!/^\S+@\S+\.\S+$/.test(d.email)) return toast('Email không hợp lệ'); f.reset(); toast('Cảm ơn bạn đã đăng ký nhận tin!'); },
  quick(d) { VIEWS.filter.q = d.q; go('/tim-kiem'); },
  filter(d) { Object.assign(VIEWS.filter, d); render(); },
  register(d) {
    if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email) || d.pass.length < 6) return toast('Thông tin thiếu hoặc sai định dạng (mật khẩu ≥ 6 ký tự)');
    if (S.users.some(u => u.email === d.email)) return toast('Email đã được sử dụng');
    S.users.push({ ...d, role: 'member', locked: false }); save(); toast('Đăng ký thành công! Hãy đăng nhập'); go('/dang-nhap');
  },
  login(d) {
    const u = S.users.find(x => x.email === d.email && x.pass === d.pass);
    if (!u) return toast('Sai email hoặc mật khẩu');
    if (u.locked) return toast('Tài khoản đã bị khóa');
    S.me = u; save(); toast('Xin chào ' + u.name + '!');
    go({ member: '/', creator: '/mau-cua-toi', mod: '/kiem-duyet', admin: '/tai-khoan' }[u.role]);
  },
  comment(d, f) {
    if (!S.me) return go('/dang-nhap');
    if (!d.text.trim()) return toast('Hãy nhập nội dung bình luận');
    S.cmts.push({ id: Date.now(), item: +f.dataset.id, by: S.me.name, star: +d.star, text: d.text }); save(); render();
  },
  tag(d) {
    if (!d.name.trim() || S.cats.includes(d.name)) return toast('Tên trống hoặc bị trùng');
    S.cats.push(d.name); save(); render();
  },
  upload(d, f) {
    if (!d.title.trim()) return toast('Vui lòng nhập tiêu đề');
    const file = f.file.files[0];
    const add = img => {
      S.items.unshift({ id: Date.now(), title: d.title, desc: d.desc, cat: d.cat, type: d.type, style: 'Chưa phân loại', color: 'Nhiều màu',
        tags: d.tags.split(',').map(t => t.trim()).filter(Boolean), img, bg: 'linear-gradient(160deg,#ffd3e4,#cde7ff)', by: S.me.name, status: 'pending', views: 0, saves: 0 });
      save(); toast('Đã gửi, mẫu đang chờ kiểm duyệt'); go('/mau-cua-toi');
    };
    if (!file) return add(null);
    if (!file.type.startsWith('image/')) return toast('Tệp không hợp lệ, hãy chọn hình ảnh');
    const rd = new FileReader(); rd.onload = () => add(rd.result); rd.readAsDataURL(file);
  },
};
document.addEventListener('submit', e => {
  const f = e.target; if (!f.dataset.form) return;
  e.preventDefault(); FORMS[f.dataset.form](Object.fromEntries(new FormData(f)), f);
});

/* ---------- 6. ĐIỀU HƯỚNG + HIỆU ỨNG ---------- */
const ROUTES = { '': 'home', 'tim-kiem': 'search', 'dang-ky': 'register', 'dang-nhap': 'login', 'yeu-thich': 'fav', 'dang-tai': 'upload',
  'mau-cua-toi': 'mine', 'thong-ke': 'stats', 'kiem-duyet': 'moderate', 'danh-muc': 'tags', 'binh-luan': 'comments', 'tai-khoan': 'accounts', 'mau': 'mau', 'danh-gia': 'danhgia' };

function render() {
  const [, r = '', id] = location.hash.slice(1).split('/');
  const view = ROUTES[r] || 'home';
  if (GUARD[view] && !(S.me && GUARD[view].includes(S.me.role))) { toast('Bạn không có quyền vào trang này'); return go(S.me ? '/' : '/dang-nhap'); }
  app.innerHTML = VIEWS[view](id);
  app.classList.remove('enter'); void app.offsetWidth; app.classList.add('enter');
  buildMenu(); effects();
}

function effects() {
  // hiện dần khi cuộn
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('show'); io.unobserve(x.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  // số đếm tăng dần
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count, t0 = performance.now();
    (function tick(t) { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); })(t0);
  });
  // thanh thống kê chạy ra
  setTimeout(() => document.querySelectorAll('.bar').forEach(b => { b.style.width = b.dataset.w; }), 80);
}

// Vệt sáng theo chuột + nền xê dịch + nút từ tính + thẻ nghiêng 3D
let lastBtn = null;
document.addEventListener('mousemove', e => {
  const g = $('#glow'); g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px';
  document.querySelectorAll('.blob').forEach((b, i) => { b.style.translate = `${(e.clientX / innerWidth - .5) * (i + 1) * -50}px ${(e.clientY / innerHeight - .5) * (i + 1) * -50}px`; });
  const bt = e.target.closest('.btn');
  if (lastBtn && lastBtn !== bt) { lastBtn.style.setProperty('--mx', '0px'); lastBtn.style.setProperty('--my', '0px'); }
  if (bt) { const r = bt.getBoundingClientRect(); bt.style.setProperty('--mx', (e.clientX - r.left - r.width / 2) * .15 + 'px'); bt.style.setProperty('--my', (e.clientY - r.top - r.height / 2) * .25 + 'px'); }
  lastBtn = bt;
  const c = e.target.closest('.card');
  document.querySelectorAll('.card').forEach(x => { if (x !== c) x.style.transform = ''; });
  if (c) { const r = c.getBoundingClientRect(); c.style.transform = `perspective(700px) rotateY(${((e.clientX - r.left) / r.width - .5) * 10}deg) rotateX(${(.5 - (e.clientY - r.top) / r.height) * 10}deg) translateY(-4px)`; }
});

window.addEventListener('scroll', () => { $('#progress').style.width = scrollY / Math.max(1, document.body.scrollHeight - innerHeight) * 100 + '%'; });
window.addEventListener('load', () => setTimeout(() => $('#splash').classList.add('hide'), 1100));
window.addEventListener('hashchange', () => { render(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
render();
