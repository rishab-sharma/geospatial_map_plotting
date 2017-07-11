from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import request , redirect , url_for , render_template
from flask.ext.security import Security , SQLAlchemyUserDatastore , UserMixin , RoleMixin , login_required

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:bond@localhost/flask_db'
app.debug=True
db = SQLAlchemy(app)

class Well(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    lat = db.Column(db.String(80), unique=True)
    lng = db.Column(db.String(80), unique=True)

    def __init__(self,name,lat,lng):
        self.name = name
        self.lat = lat
        self.lng = lng
    def __repr__(self):
        return '<Well %r>' %self.name

@app.route('/')
def index():
    mywell = Well.query.all()
    oneItem = Well.query.filter_by(name='well_1').first()
    return render_template('add_user3.html' , mywell = mywell , oneItem = oneItem)

@app.route('/profile/<name>')
def profile(name):
    well = Well.query.filter_by(name = name).first()
    return render_template('profile2.html' , well = well)

@app.route('/profile_view')
def profile_view():
    return render_template('profile2.html')


@app.route('/post_well',methods=['POST'])
def post_user():
    well = Well(request.form['name'],request.form['lat'],request.form['lng'])
    db.session.add(well)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run()
