function lovetime() {
    // 每秒更新时间
    window.setTimeout(lovetime, 1000);
    
    // 示例：2018-11-19 15:30:00
    const startDate = new Date(2024, 11, 28, 18, 0, 0); 
    const today = new Date();

    // 计算完整的年份差：先构造今年对应的“纪念日”，包含小时、分钟和秒
    const anniversaryThisYear = new Date(
        today.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds()
    );
    let diffYears = today.getFullYear() - startDate.getFullYear();
    if (today < anniversaryThisYear) {
        diffYears--;
    }

    // 计算最近一次纪念日的时间点
    let lastAnniversary = new Date(
        today.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds()
    );
    if (today < lastAnniversary) {
        lastAnniversary.setFullYear(today.getFullYear() - 1);
    }

    // 计算从最近一次纪念日到现在的时长（毫秒）
    const diffTime = today - lastAnniversary;
    
    // 分解为天、小时、分钟和秒
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const remainingAfterDays = diffTime - diffDays * 86400000;
    const diffHours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
    const remainingAfterHours = remainingAfterDays - diffHours * 3600000;
    const diffMinutes = Math.floor(remainingAfterHours / (1000 * 60));
    const diffSeconds = Math.floor((remainingAfterHours - diffMinutes * 60000) / 1000);

    document.getElementById("lovetime").innerHTML = 
        `我们已经在一起 ${diffYears}年 ${diffDays}天 ${diffHours}小时 ${diffMinutes}分钟 ${diffSeconds}秒啦`;
}
lovetime();
