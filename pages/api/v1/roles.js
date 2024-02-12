const NAMESPACE = process.env.AUTH0_NAMESPACE;
const ROLES = {
  "1204165274@qq.com": ["admin"],
};
export default function getRole(req, res) {
  try {
    const email = req.query?.email;
    const role = ROLES[email];
    if (email && role) {
      return res.json({ [NAMESPACE + "/roles"]: role });
    }
    return res.json({ [NAMESPACE + "/roles"]: ["guest"] });
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
