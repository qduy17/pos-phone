class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home', {style: 'home', title: 'Admin panel'});
    }

    //[GET] /search
    search(req, res) {
        res.render('search', {style: 'search'});
    }

    about(req, res) {
        res.render('about');
    }

    login(req, res) {
        res.render('login', {layout: 'noheaderfooter', style: 'login', title: 'Login'});
    }

    signup(req,res) {
        res.render('signup', {layout: 'noheaderfooter', style: 'signup', title: 'Sign up'});
    }
}

module.exports = new SiteController();
