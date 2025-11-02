import { useState } from 'react';
import '../styles/AuthModal.css';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', full_name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = async (userData) => {
    try {
      const res = await fetch('http://localhost/TechStore/api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error('Lỗi đăng ký: ' + err.message);
    }
  };

  const loginUser = async (userData) => {
    try {
      const res = await fetch('http://localhost/TechStore/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error('Lỗi đăng nhập: ' + err.message);
    }
  };

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'login') {
        if (!form.email || !form.password) {
          throw new Error('Vui lòng nhập đầy đủ email và mật khẩu');
        }
        const loginData = await loginUser({
          email: form.email,
          password: form.password
        });
        
        if (loginData.success) {
          // Xử lý đăng nhập thành công
          console.log('Đăng nhập thành công:', loginData);
          onClose();
        } else {
          throw new Error(loginData.message || 'Đăng nhập thất bại');
        }
      } else {
        if (!form.email || !form.password || !form.full_name) {
          throw new Error('Vui lòng nhập đầy đủ thông tin');
        }
        const registerData = await registerUser({
          email: form.email,
          password: form.password,
          full_name: form.full_name
        });

        if (registerData.success) {
          // Xử lý đăng ký thành công
          console.log('Đăng ký thành công:', registerData);
          setMode('login');
          setForm({ ...form, password: '' }); // Xóa mật khẩu sau khi đăng ký
        } else {
          throw new Error(registerData.message || 'Đăng ký thất bại');
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="auth-modal-title">
          {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        </h2>

        <form className="auth-modal-form" onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className="form-group">
              <label htmlFor="full_name">Họ và tên</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <button 
            type="submit" 
            className="auth-modal-button"
            disabled={loading}
          >
            {loading 
              ? 'Đang xử lý...' 
              : mode === 'login' 
                ? 'Đăng nhập' 
                : 'Đăng ký'
            }
          </button>
        </form>

        <div className="auth-modal-switch">
          {mode === 'login' ? (
            <span>
              Bạn chưa có tài khoản?{' '}
              <button type="button" onClick={() => setMode('register')}>
                Đăng ký
              </button>
            </span>
          ) : (
            <span>
              Đã có tài khoản?{' '}
              <button type="button" onClick={() => setMode('login')}>
                Đăng nhập
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
