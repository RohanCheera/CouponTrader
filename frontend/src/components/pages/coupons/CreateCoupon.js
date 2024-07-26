import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Form,Button } from 'react-bootstrap';
import { createCoupon } from '../../../thunks/couponThunks';

function CreateCoupon() {
  const [newCoupon, setNewCoupon] = useState({
    title: '',
    description: '',
    category: '',
    code: '',
    expirationDate: '',
    usageLimit: ''
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.coupons);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon({ ...newCoupon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before :",newCoupon)
    dispatch(createCoupon(newCoupon))
      .then(() => {
        // Reset form after submission
        setNewCoupon({
          title: '',
          description: '',
          category: '',
          code: '',
          expirationDate: '',
          usageLimit: ''
        });
      })
      .catch((err) => {
        console.error('There was an error creating the coupon!', err);
      });
  };
  return (
    <div>
      <h3>Create a New Coupon</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={newCoupon.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={newCoupon.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={newCoupon.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCode">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter code"
                name="code"
                value={newCoupon.code}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Enter expiration date"
                name="expirationDate"
                value={newCoupon.expirationDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsageLimit">
              <Form.Label>Usage Limit</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter usage limit"
                name="usageLimit"
                value={newCoupon.usageLimit}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Coupon'}
            </Button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </Form>
    </div>
  )
}

export default CreateCoupon