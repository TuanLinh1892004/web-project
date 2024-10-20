import { useState } from "react";

export function Category() {
    const [active, setActive] = useState(0);
    
    const [category, setCategory] = useState([
        {
            href: '#',
            type: 0,
            name: 'Trang điểm mặt'
        },
        {
            href: '#',
            type: 1,
            name: 'Trang điểm môi'
        },
        {
            href: '#',
            type: 2,
            name: 'Trang điểm mắt'
        },
        {
            href: '#',
            type: 3,
            name: 'Makup collection'
        },
        {
            href: '#',
            type: 4,
            name: 'Dưỡng da'
        },
        {
            href: '#',
            type: 5,
            name: 'Kem dưỡng ẩm'
        },
    ])
    
    return (
        <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="category__heading">Danh mục</h3>
                <ul className="category-list">
                    {
                        category.map((item, index) => (
                            <li key={index} className={"category-item"+((item.type === active) ? " category-item--active" : "")}>
                                <a
                                    href={item.href}
                                    className="category-item__link"
                                    onClick={()=>setActive(item.type)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}