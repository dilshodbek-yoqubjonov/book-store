const { Router } = require("express");
const { getHome } = require("../controllers/home");
const { getOrder, postOrder } = require("../controllers/order");
const { getSignIn, register, login } = require("../controllers/signin");
const { getMonitoring } = require("../controllers/afterOrder");
const { checkAdmin, admin } = require("../controllers/admin");
const { getAdminPanel, postAdminPanel } = require("../controllers/adminPanel");
const verifyToken = require("../middleware/verifyToken");
const postAuthor = require("../controllers/addAuthor");
const postCategory = require("../controllers/addCategory");


const router = Router();

router.get("/", getHome);
router.get("/order/:id", getOrder);
router.get("/signin", getSignIn);
router.get("/end", getMonitoring);
router.get("/admin", admin);
router.get("/add",verifyToken, getAdminPanel);



router.post("/author",verifyToken, postAuthor);
router.post("/category",verifyToken, postCategory);


router.post("/add",verifyToken, postAdminPanel);
router.post("/admin", checkAdmin);
router.post("/order", postOrder);
router.post("/register", register);
router.post("/login",login);

module.exports = router;
