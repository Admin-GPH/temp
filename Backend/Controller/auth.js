const { catchAsync, AppError } = require("./misc/errorHander");

const Order = require("../Models/orders");

exports.session = catchAsync(async (req, res, next) => {
  const name = req.query.name;
  const country = req.query.country;
  const mobile = req.query.mobile;
  const color = req.query.color;
  const orderid = req.query.order;

  console.log(name, country, mobile, color, orderid);

  if (name && country && mobile && color && orderid) {
    const order = await new Order({
      name,
      country,
      mobile,
      color,
      order_id: orderid,
    });
    order.save();

    res.status(200).json({
      success: true,
    });
  } else {
    res.status(404).json({
      success: false,
    });
  }
});