// 打开指定数据库的指定版本
const db_res = indexedDB.open('ssydx_db', 3);
// IDBOpenDBReuqest
console.log(db_res);
db_res.onsuccess = () => {
    const db = db_res.result;
    // IDBDatabase
    console.log(db);
    // 数据库名称
    console.log(db.name);
    // 数据表名称列表
    console.log(db.objectStoreNames);
    // 数据库版本
    console.log(db.version);

    const tst = db.transaction(['ssydx_tb1', 'ssydx_tb2'], 'readwrite');
    // IDBTransaction
    console.log(tst);
    // 数据库对象
    console.log(tst.db);
    // 事务持续性
    console.log(tst.durability);
    // 事务权限
    console.log(tst.mode);
    // 事务涉及的数据表名称列表
    console.log(tst.objectStoreNames);

    const tb = tst.objectStore('ssydx_tb1');
    // IDBObjectStore
    console.log(tb);
    // 数据表名称
    console.log(tb.name);
    // 主键路径
    console.log(tb.keyPath);
    // 是否自增
    console.log(tb.autoIncrement);
    // 数据列名称列表
    console.log(tb.indexNames);
    // 事务对象
    console.log(tb.transaction);

    const idx = tb.index('name');
    console.log(idx);
    console.log(idx.name);
    console.log(idx.keyPath);
    console.log(idx.unique);
    console.log(idx.objectStore);

    const cur_res1 = idx.openKeyCursor();
    console.log(cur_res1);
    cur_res1.addEventListener('success', () => {
        const cur = cur_res1.result;
        console.log(cur);
    })

    const cur_res3 = tb.openKeyCursor();
    console.log(cur_res3);
    cur_res3.addEventListener('success', () => {
        const cur = cur_res3.result;
        console.log(cur);
    })

    const cur_res2 = idx.openCursor();
    console.log(cur_res2);
    cur_res2.addEventListener('success', () => {
        const cur = cur_res2.result;
        console.log(cur);
        console.log(cur.value);
        console.log(cur.direction);
        console.log(cur.key);
        console.log(cur.primaryKey);
    })

    const cur_res4 = tb.openCursor();
    console.log(cur_res4);
    cur_res4.addEventListener('success', () => {
        const cur = cur_res4.result;
        console.log(cur);
        console.log(cur.value);
        console.log(cur.direction);
        console.log(cur.key);
        console.log(cur.primaryKey);

    })
    const keyRange = IDBKeyRange.bound('a', 'z', false, false);
    console.log(IDBKeyRange);
    console.log(keyRange);
    
}