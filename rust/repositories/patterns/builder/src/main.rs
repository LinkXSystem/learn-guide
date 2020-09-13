#[derive(Clone)]
struct Foo {
    name: String,
}

impl Foo {
    fn new() -> Foo {
        Foo {
            name: Default::default(),
        }
    }

    fn set_name(&mut self, name: &str) {
        self.name = String::from(name);
    }
}

trait Builder {
    fn set_name(&mut self, name: &str);
    fn finish(&self) -> Foo;
}

struct FooBuilder {
    obj: Foo,
}

impl FooBuilder {
    fn new() -> FooBuilder {
        FooBuilder { obj: Foo::new() }
    }
}

impl Builder for FooBuilder {
    fn set_name(&mut self, name: &str) {
        self.obj.set_name(name);
    }

    fn finish(&self) -> Foo {
        let foo = self.obj.clone();

        foo
    }
}

struct Director {
    builder: Box<FooBuilder>,
}

impl Director {
    fn new(builder: Box<FooBuilder>) -> Director {
        Director { builder: builder }
    }

    fn build(&mut self, name: &str) -> Foo {
        self.builder.set_name(name);

        let obj = self.builder.finish();

        obj
    }
}

fn main() {
    let builder = FooBuilder::new();
    let mut director = Director::new(Box::new(builder));
    let obj = director.build("zhi");

    println!("Foo's name is {}", obj.name);
}
